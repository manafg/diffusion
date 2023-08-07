import { FieldValues , Control } from 'react-hook-form';
type TextInputProps = {
    name: string;
    subLabel?:string;
    label: string;
    height?:number;
    type?: string;
    control: any;
    error?: boolean;
    helperText?: string;
  }

  export type {TextInputProps}