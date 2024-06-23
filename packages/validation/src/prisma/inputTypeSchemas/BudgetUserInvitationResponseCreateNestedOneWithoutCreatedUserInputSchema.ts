import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BudgetUserInvitationResponseCreateWithoutCreatedUserInputSchema } from './BudgetUserInvitationResponseCreateWithoutCreatedUserInputSchema';
import { BudgetUserInvitationResponseUncheckedCreateWithoutCreatedUserInputSchema } from './BudgetUserInvitationResponseUncheckedCreateWithoutCreatedUserInputSchema';
import { BudgetUserInvitationResponseCreateOrConnectWithoutCreatedUserInputSchema } from './BudgetUserInvitationResponseCreateOrConnectWithoutCreatedUserInputSchema';
import { BudgetUserInvitationResponseWhereUniqueInputSchema } from './BudgetUserInvitationResponseWhereUniqueInputSchema';

export const BudgetUserInvitationResponseCreateNestedOneWithoutCreatedUserInputSchema: z.ZodType<Prisma.BudgetUserInvitationResponseCreateNestedOneWithoutCreatedUserInput> = z.object({
  create: z.union([ z.lazy(() => BudgetUserInvitationResponseCreateWithoutCreatedUserInputSchema),z.lazy(() => BudgetUserInvitationResponseUncheckedCreateWithoutCreatedUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BudgetUserInvitationResponseCreateOrConnectWithoutCreatedUserInputSchema).optional(),
  connect: z.lazy(() => BudgetUserInvitationResponseWhereUniqueInputSchema).optional()
}).strict();

export default BudgetUserInvitationResponseCreateNestedOneWithoutCreatedUserInputSchema;