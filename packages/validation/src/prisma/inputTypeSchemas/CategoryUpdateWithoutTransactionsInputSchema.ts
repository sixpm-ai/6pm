import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './UserUpdateOneRequiredWithoutCategoriesNestedInputSchema';
import { CategoryUpdateOneWithoutChildrenNestedInputSchema } from './CategoryUpdateOneWithoutChildrenNestedInputSchema';
import { CategoryUpdateManyWithoutParentNestedInputSchema } from './CategoryUpdateManyWithoutParentNestedInputSchema';

export const CategoryUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutTransactionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  parent: z.lazy(() => CategoryUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => CategoryUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();

export default CategoryUpdateWithoutTransactionsInputSchema;