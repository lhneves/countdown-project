import { FieldInputProps, FieldMetaProps, FormikValues } from 'formik';

export interface FieldProps<V = FormikValues> {
  field: FieldInputProps<V>;
  meta: FieldMetaProps<V>;
}
