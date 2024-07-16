import { CategoryForm } from '@/components/category/category-form'
import { useCreateCategory } from '@/stores/category/hooks'
import type { CategoryFormValues, CategoryTypeType } from '@6pm/validation'
import { createId } from '@paralleldrive/cuid2'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { View } from 'react-native'

export default function CreateCategoryScreen() {
  const router = useRouter()
  const { type = 'EXPENSE' } = useLocalSearchParams<{
    type?: CategoryTypeType
  }>()
  const { mutateAsync } = useCreateCategory()

  const handleCreate = async (data: CategoryFormValues) => {
    mutateAsync({ data, id: createId() }).catch(() => {
      // ignore
    })
    router.back()
  }

  return (
    <View className="py-3 px-6 bg-card h-screen">
      <CategoryForm onSubmit={handleCreate} defaultValues={{ type }} />
    </View>
  )
}
