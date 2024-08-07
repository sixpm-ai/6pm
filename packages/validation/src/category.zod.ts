import { z } from 'zod'
import { CategoryTypeSchema } from './prisma'

export const zCreateCategory = z.object({
  id: z.string().cuid2().optional(),
  type: CategoryTypeSchema,
  name: z.string().min(1, {
    message: 'Category name is required',
  }),
  description: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
})
export type CreateCategory = z.infer<typeof zCreateCategory>

export const zUpdateCategory = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Category name is required',
    })
    .optional(),
  description: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
})
export type UpdateCategory = z.infer<typeof zUpdateCategory>

export const zCategoryFormValues = zCreateCategory
export type CategoryFormValues = z.infer<typeof zCategoryFormValues>
