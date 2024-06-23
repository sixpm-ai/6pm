import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BudgetUpdateOneWithoutTransactionsNestedInputSchema } from './BudgetUpdateOneWithoutTransactionsNestedInputSchema';
import { UserWalletAccountUpdateOneRequiredWithoutTransactionsNestedInputSchema } from './UserWalletAccountUpdateOneRequiredWithoutTransactionsNestedInputSchema';
import { UserUpdateOneRequiredWithoutTransactionsNestedInputSchema } from './UserUpdateOneRequiredWithoutTransactionsNestedInputSchema';

export const TransactionUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  budget: z.lazy(() => BudgetUpdateOneWithoutTransactionsNestedInputSchema).optional(),
  walletAccount: z.lazy(() => UserWalletAccountUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  createdByUser: z.lazy(() => UserUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional()
}).strict();

export default TransactionUpdateWithoutCategoryInputSchema;