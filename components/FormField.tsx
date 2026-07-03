const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  <div className="form-field">
    <label htmlFor={id}>{label}</label>
    {as === "textarea" ? (
      <textarea
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : as === "select" ? (
      <select name={id} id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </div>;
};

export default FormField;
