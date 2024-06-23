import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutChildrenInputSchema } from './CategoryCreateNestedOneWithoutChildrenInputSchema';
import { CategoryCreateNestedManyWithoutParentInputSchema } from './CategoryCreateNestedManyWithoutParentInputSchema';
import { TransactionCreateNestedManyWithoutCategoryInputSchema } from './TransactionCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateWithoutUserInputSchema: z.ZodType<Prisma.CategoryCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parent: z.lazy(() => CategoryCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => CategoryCreateNestedManyWithoutParentInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateWithoutUserInputSchema;
