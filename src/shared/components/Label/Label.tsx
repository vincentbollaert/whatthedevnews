import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '../../../../stitches.config'

export type LabelProps = LabelPrimitive.LabelProps & {
  label?: string
}
export const Label = styled(LabelPrimitive.Root, {
  fontSize: '$default',
  fontWeight: 500,
  color: '$default',
  userSelect: 'none',
})
