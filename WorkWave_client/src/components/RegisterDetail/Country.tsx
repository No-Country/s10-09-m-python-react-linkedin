const countrys = [
  { value: "venezuela", label: "Venezuela" },
  { value: "argentina", label: "Argentina" },
  { value: "colombia", label: "Colombia" },
];

export default function Country() {
  return (
    <div>
      <select
        name="countrys"
        id="countrys"
        className={`mt-1 p-2 border rounded-xl w-full bg-inherit 
        } `}
      >
        <option className="bg-black" value="default">
          Selecciona un país
        </option>
        <option className="bg-black" value={countrys[0].value}>
          {countrys[0].label}
        </option>
        <option className="bg-black" value={countrys[1].value}>
          {countrys[1].label}
        </option>
        <option className="bg-black" value={countrys[2].value}>
          {countrys[2].label}
        </option>
      </select>
    </div>
  );
}
