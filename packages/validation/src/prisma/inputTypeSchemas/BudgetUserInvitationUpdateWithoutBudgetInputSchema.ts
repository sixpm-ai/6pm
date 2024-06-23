import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BudgetUserPermissionSchema } from './BudgetUserPermissionSchema';
import { NullableEnumBudgetUserPermissionFieldUpdateOperationsInputSchema } from './NullableEnumBudgetUserPermissionFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutCreatedBudgetUserInvitationsNestedInputSchema } from './UserUpdateOneRequiredWithoutCreatedBudgetUserInvitationsNestedInputSchema';
import { BudgetUserInvitationResponseUpdateManyWithoutInvitationNestedInputSchema } from './BudgetUserInvitationResponseUpdateManyWithoutInvitationNestedInputSchema';

export const BudgetUserInvitationUpdateWithoutBudgetInputSchema: z.ZodType<Prisma.BudgetUserInvitationUpdateWithoutBudgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => BudgetUserPermissionSchema),z.lazy(() => NullableEnumBudgetUserPermissionFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdByUser: z.lazy(() => UserUpdateOneRequiredWithoutCreatedBudgetUserInvitationsNestedInputSchema).optional(),
  responses: z.lazy(() => BudgetUserInvitationResponseUpdateManyWithoutInvitationNestedInputSchema).optional()
}).strict();

export default BudgetUserInvitationUpdateWithoutBudgetInputSchema;