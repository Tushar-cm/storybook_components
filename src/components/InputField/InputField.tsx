import React, { useId } from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, helperText, error, leftIcon, disabled, className = '', ...props }, ref) => {
    const defaultId = useId();
    const inputId = props.id || defaultId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className={`flex flex-col gap-1.5 w-full ${disabled ? 'opacity-60' : ''}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold text-foreground/80 tracking-wide select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute left-3.5 flex items-center justify-center text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={`
              w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 outline-none
              bg-card text-foreground
              placeholder:text-muted-foreground/60
              focus:ring-2 focus:ring-offset-1
              disabled:cursor-not-allowed
              ${leftIcon ? 'pl-10' : ''}
              ${
                error
                  ? 'border-red-500/80 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/40'
                  : 'border-border focus:border-primary focus:ring-focus-ring/60'
              }
              ${className}
            `}
            {...props}
          />
        </div>

        {error && (
          <span
            id={errorId}
            className="text-xs font-medium text-red-500 animate-slide-in select-none"
          >
            {error}
          </span>
        )}

        {!error && helperText && (
          <span id={helperId} className="text-xs text-muted-foreground select-none">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
export default InputField;
