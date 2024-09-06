interface TypographyProps {
  children: string
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
  className?: string
}

export const Typography = ({
  children,
  variant,
  className,
  ...rest
}: TypographyProps) => {
  const Component = variant

  if (!Component) {
    return <p {...rest}>{children}</p>
  }

  return (
    <Component
      className={`${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
