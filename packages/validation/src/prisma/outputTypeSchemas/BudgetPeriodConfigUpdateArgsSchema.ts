import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BudgetPeriodConfigIncludeSchema } from '../inputTypeSchemas/BudgetPeriodConfigIncludeSchema'
import { BudgetPeriodConfigUpdateInputSchema } from '../inputTypeSchemas/BudgetPeriodConfigUpdateInputSchema'
import { BudgetPeriodConfigUncheckedUpdateInputSchema } from '../inputTypeSchemas/BudgetPeriodConfigUncheckedUpdateInputSchema'
import { BudgetPeriodConfigWhereUniqueInputSchema } from '../inputTypeSchemas/BudgetPeriodConfigWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { BudgetArgsSchema } from "../outputTypeSchemas/BudgetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BudgetPeriodConfigSelectSchema: z.ZodType<Prisma.BudgetPeriodConfigSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
  amount: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  budgetId: z.boolean().optional(),
  budget: z.union([z.boolean(),z.lazy(() => BudgetArgsSchema)]).optional(),
}).strict()

export const BudgetPeriodConfigUpdateArgsSchema: z.ZodType<Prisma.BudgetPeriodConfigUpdateArgs> = z.object({
  select: BudgetPeriodConfigSelectSchema.optional(),
  include: BudgetPeriodConfigIncludeSchema.optional(),
  data: z.union([ BudgetPeriodConfigUpdateInputSchema,BudgetPeriodConfigUncheckedUpdateInputSchema ]),
  where: BudgetPeriodConfigWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default BudgetPeriodConfigUpdateArgsSchema;