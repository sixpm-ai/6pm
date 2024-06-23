import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CategoryUpdateOneWithoutTransactionsNestedInputSchema } from './CategoryUpdateOneWithoutTransactionsNestedInputSchema';
import { BudgetUpdateOneWithoutTransactionsNestedInputSchema } from './BudgetUpdateOneWithoutTransactionsNestedInputSchema';
import { UserWalletAccountUpdateOneRequiredWithoutTransactionsNestedInputSchema } from './UserWalletAccountUpdateOneRequiredWithoutTransactionsNestedInputSchema';

export const TransactionUpdateWithoutCreatedByUserInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutCreatedByUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.lazy(() => CategoryUpdateOneWithoutTransactionsNestedInputSchema).optional(),
  budget: z.lazy(() => BudgetUpdateOneWithoutTransactionsNestedInputSchema).optional(),
  walletAccount: z.lazy(() => UserWalletAccountUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional()
}).strict();

export default TransactionUpdateWithoutCreatedByUserInputSchema;
