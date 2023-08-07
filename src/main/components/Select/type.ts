
type Option  = {
    label: string;
    value: number;
  }
  
type SelectInputProps = {
    name: string;
    label: string;
    control: any;
    error?: boolean;
    helperText?: string;
    options: Option[];
    defaultValue?: string;
  }

  export type {SelectInputProps}