import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionIncludeSchema } from '../inputTypeSchemas/TransactionIncludeSchema'
import { TransactionWhereInputSchema } from '../inputTypeSchemas/TransactionWhereInputSchema'
import { TransactionOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionOrderByWithRelationInputSchema'
import { TransactionWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionWhereUniqueInputSchema'
import { TransactionScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionScalarFieldEnumSchema'
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

export const TransactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TransactionFindFirstOrThrowArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereInputSchema.optional(),
  orderBy: z.union([ TransactionOrderByWithRelationInputSchema.array(),TransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TransactionScalarFieldEnumSchema,TransactionScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default TransactionFindFirstOrThrowArgsSchema;
