import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionIncludeSchema } from '../inputTypeSchemas/TransactionIncludeSchema'
import { TransactionWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionWhereUniqueInputSchema'
import { TransactionCreateInputSchema } from '../inputTypeSchemas/TransactionCreateInputSchema'
import { TransactionUncheckedCreateInputSchema } from '../inputTypeSchemas/TransactionUncheckedCreateInputSchema'
import { TransactionUpdateInputSchema } from '../inputTypeSchemas/TransactionUpdateInputSchema'
import { TransactionUncheckedUpdateInputSchema } from '../inputTypeSchemas/TransactionUncheckedUpdateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { BudgetArgsSchema } from "../outputTypeSchemas/BudgetArgsSchema"
import { UserWalletAccountArgsSchema } from "../outputTypeSchemas/UserWalletAccountArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionSelectSchema: z.ZodType<Prisma.TransactionSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  date: z.boolean().optional(),
  note: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  budgetId: z.boolean().optional(),
  walletAccountId: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  budget: z.union([z.boolean(),z.lazy(() => BudgetArgsSchema)]).optional(),
  walletAccount: z.union([z.boolean(),z.lazy(() => UserWalletAccountArgsSchema)]).optional(),
  createdByUser: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TransactionUpsertArgsSchema: z.ZodType<Prisma.TransactionUpsertArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereUniqueInputSchema,
  create: z.union([ TransactionCreateInputSchema,TransactionUncheckedCreateInputSchema ]),
  update: z.union([ TransactionUpdateInputSchema,TransactionUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TransactionUpsertArgsSchema;