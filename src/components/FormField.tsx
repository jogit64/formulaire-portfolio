type Props = {
  label: string;
  name: string;
  type: "text" | "email" | "textarea" | "checkbox-group";
  value: string | string[];
  onChange: (name: string, value: string | string[]) => void;
  options?: string[]; // pour les checkbox
};

export const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  options = [],
}: Props) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(name, e.target.value);
  };

  const handleCheckboxChange = (option: string) => {
    const array = value as string[];
    if (array.includes(option)) {
      onChange(
        name,
        array.filter((v) => v !== option)
      );
    } else {
      onChange(name, [...array, option]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>

      {type === "text" || type === "email" ? (
        <input
          type={type}
          name={name}
          value={value as string}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value as string}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      ) : type === "checkbox-group" ? (
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={(value as string[]).includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
};
