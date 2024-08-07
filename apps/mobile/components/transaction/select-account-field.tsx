import { sleep } from '@/lib/utils'
import { useWallets } from '@/queries/wallet'
import type { WalletAccountWithBalance } from '@6pm/validation'
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import * as Haptics from 'expo-haptics'
import { useRef } from 'react'
import { useController } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FullWindowOverlay } from 'react-native-screens'

import { useColorScheme } from '@/hooks/useColorScheme'
import { theme } from '@/lib/theme'
import GenericIcon from '../common/generic-icon'
import { Button } from '../ui/button'
import { Text } from '../ui/text'

export function SelectAccountField({
  onSelect,
}: {
  onSelect?: (walletAccount: WalletAccountWithBalance) => void
}) {
  const { bottom } = useSafeAreaInsets()
  const { data: walletAccounts, isLoading } = useWallets()
  const { colorScheme } = useColorScheme()

  const sheetRef = useRef<BottomSheetModal>(null)
  const { i18n } = useLingui()
  const {
    field: { onChange, onBlur, value },
  } = useController({ name: 'walletAccountId' })

  const selectedWalletAccount = walletAccounts?.find(
    (walletAccount) => walletAccount.id === value,
  )

  return (
    <>
      <Button
        variant="secondary"
        className="!px-3 max-w-[160px] border border-border"
        disabled={isLoading}
        onPress={() => {
          Haptics.selectionAsync()
          Keyboard.dismiss()
          sheetRef.current?.present()
        }}
      >
        {!!selectedWalletAccount && (
          <GenericIcon
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            name={selectedWalletAccount.icon as any}
            className="h-5 w-5 text-primary"
          />
        )}
        <Text className="line-clamp-1 shrink">
          {selectedWalletAccount?.name || t(i18n)`Select account`}
        </Text>
      </Button>
      <BottomSheetModal
        ref={sheetRef}
        index={0}
        enableDynamicSizing
        enablePanDownToClose
        keyboardBehavior="extend"
        backgroundStyle={{ backgroundColor: theme[colorScheme].background }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            enableTouchThrough
          />
        )}
        containerComponent={(props) => (
          <FullWindowOverlay>{props.children}</FullWindowOverlay>
        )}
      >
        <BottomSheetFlatList
          data={walletAccounts}
          numColumns={4}
          keyExtractor={(i) => i.id}
          contentContainerClassName="px-4 gap-4"
          columnWrapperClassName="gap-2"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          ListHeaderComponent={
            <Text className="pt-2 text-center font-medium text-base">
              {t(i18n)`Wallet Accounts`}
            </Text>
          }
          contentContainerStyle={{ paddingBottom: bottom + 16 }}
          renderItem={({ item }) => (
            <Button
              size="icon"
              className="flex h-20 flex-1 flex-grow flex-col gap-2 px-2"
              variant={value === item ? 'secondary' : 'ghost'}
              onPress={async () => {
                Haptics.selectionAsync()
                sheetRef.current?.close()
                await sleep(500)
                onChange(item.id)
                onBlur()
                onSelect?.(item)
              }}
            >
              <GenericIcon
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                name={item.icon as any}
                className="size-8 text-foreground"
              />
              <Text className="!text-sm line-clamp-1 text-center text-muted-foreground">
                {item.name}
              </Text>
            </Button>
          )}
        />
      </BottomSheetModal>
    </>
  )
}
