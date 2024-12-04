// src/components/SaveTheDateForm.jsx
import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { DatePicker } from "@nextui-org/date-picker";
import { DateInput } from "@nextui-org/react";
import { CalendarDate, isToday } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Input } from "@nextui-org/react";
import {
  TimeInput,
  Select,
  SelectSection,
  SelectItem,
  Slider,
  Tooltip,
  Textarea,
  Checkbox,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Time, parseDate } from "@internationalized/date";
import Form from "./Form.astro";
import privacyData from "../data/privacy.json";
const SaveTheDateForm = () => {
  const [value, setValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const [cityValue, setCityValue] = React.useState("");
  const [lugarValue, setLugarValue] = React.useState("");
  const [tlfValue, setTlfValue] = React.useState("");
  const [budgetValue, setBudgetValue] = React.useState("");
  const [dateValue, setDateValue] = React.useState(new Date());
  const [timeValue, setTimeValue] = React.useState("");
  const [duraValue, setDuraValue] = React.useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dateInputRef = useRef(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleButtonClick = () => {
    if (!isChecked) {
      alert("Debes aceptar la política de privacidad antes de continuar.");
    } else {
      // Lógica para cuando el checkbox está marcado (por ejemplo, enviar formulario)
      console.log("Continuando...");
    }
  };
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validateTlf = (tlfValue) => value.match(/^\+?[1-9]\d{1,14}$/);

  const isInvalidEmail = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const isInvalidName = React.useMemo(() => {
    if (nameValue === "") return false;

    return nameValue.length < 8 ? true : false;
  }, [nameValue]);

  const isInvalidCity = React.useMemo(() => {
    if (cityValue === "") return false;
    return cityValue.length <= 6 ? true : false;
  }, [cityValue]);

  const isInvalidLugar = React.useMemo(() => {
    if (lugarValue === "") return false;
    return lugarValue.length <= 4 ? true : false;
  }, [lugarValue]);

  const isInvalidTlf = React.useMemo(() => {
    if (tlfValue === "" && tlfValue.length <= 7) {
      return true;
    } else {
      return false;
    }
  }, [tlfValue]);

  const isInvalidBudget = React.useMemo(() => {
    if (budgetValue === "") return false;
    if (budgetValue <= 0) return true;

    return budgetValue === "" ? true : false;
  }, [budgetValue]);

  const isInvalidDate = React.useMemo(() => {
    return dateValue === "" ? true : false;
  }, [dateValue]);

  const isInvalidTime = React.useMemo(() => {
    return timeValue === "" ? true : false;
  }, [timeValue]);

  const isInvalidDura = React.useMemo(() => {
    if (duraValue === "") return true;
  }, [duraValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const date = formData.get("date");
    const time = formData.get("time");
    const city = formData.get("city");
    const evento = formData.get("evento");
    const duracion = formData.get("duracion");
    const budget = parseFloat(document.getElementById("budget").value);
    const tlf = formData.get("tlf");
    const tlfevento = formData.get("tlfevento");
    const email = formData.get("email");
    const invite = parseFloat(document.getElementById("invite").value);
    const music = formData.get("music");
    const valoracion = parseFloat(document.getElementById("valoracion").value);
    const feed = formData.get("feed");
    const fechaISO = formData.get("date");
    const fechaObj = new Date(fechaISO);
    // const hora = document.getElementById("hora").value; // Ejemplo: "13:45"

    // // Convierte la hora al formato local deseado
    // const [hours, minutes] = hora.split(":"); // Separa horas y minutos
    // let hours12 = hours % 12 || 12; // Convierte a formato de 12 horas
    // let ampm = hours < 12 ? "AM" : "PM"; // AM o PM
    // const horaLocal = `${hours12}:${minutes} ${ampm}`;
    // if (name.trim()) {
    //   const error = true; // Añade una clase CSS para el borde rojo
    //   alert("Este campo es obligatorio.");
    //   return;
    // }
    const base = new Airtable({
      apiKey:
        "patLVzLl80QvgBI2A.7b4b2cb709909540eaf7a01590a450b1f77abb898b151d491129a48e28635924",
    }).base("appyreXbsqMvaSsZe");
    base("tblTGDYDiec4bf66k")
      .create({
        fldVVwDMcBKCu3ech: name,
        fld4UR3dQ1nQFK5Pb: fechaISO,
        fldhhoUKa7stuQKcS: time,
        fldYmJPUd792AplMX: city,
        fldptbO18FDDc5XEQ: duracion,
        fldRXjgpP75ddVjc7: budget,
        fldqdRp24u8Y5HOin: evento,
        fld1ohGjqIVHa0cWk: tlf,
        fld6DvkeHBQqNKkoN: tlfevento,
        fldL1aEgyMIZs1iAd: email,
        fldVAPLZb2qCb2s5P: invite,
        fldckYyf3pEZYQGQv: music,
        fldQbQawI44b56g5l: feed,
        fldwOX55PL7u85m7y: valoracion,
      })
      .then((record) => {
        alert("Prerreserva enviada");
        console.log("Created record:", record);
      })
      .catch((err) => {
        alert("Ha habido un error, la fecha no es correcta.");

        console.error("Error creating record:", err);
      });
  };

  return (
    <>
      <div class="">
        <div class="mx-14 mt-10 border-2 border-amber-400 rounded-lg">
          <h1
            id="contacto"
            class="text-4xl items-center mt-2 justify-center text-center  leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl"
          >
            SAVE THE DATE
          </h1>
          <div class="mt-4 text-center text-white">
            <h2>
              Déjanos tu prereserva y te contactaremos tras evaluar tu petición.
            </h2>
          </div>
          <form id="nameForm" onSubmit={handleSubmit}>
            <div className="p-8">
              <div className="grid gap-4 sm:grid-cols-2 ">
                <div className="date-picker-container">
                  <Input
                    value={nameValue}
                    onValueChange={setNameValue}
                    isInvalid={isInvalidName}
                    color={isInvalidName ? "danger" : "primary"}
                    errorMessage="Campo requerido"
                    type="text"
                    id="name"
                    name="name"
                    label="Vuestros nombres"
                    labelClassName="text-white"
                    isRequired
                    minLength="5"
                    required
                    variant="underlined"
                    classNames={{
                      base: "text-white",
                      inputWrapper: "text-white",
                      innerWrapper: "text-white",
                      label: "text-white",
                      mainWrapper: "text-white",
                      input: "text-white",
                    }}
                  />
                </div>
                <div className="date-picker-container">
                  <Input
                    value={value}
                    type="email"
                    id="email"
                    name="email"
                    classNames={{
                      base: "text-white",
                      inputWrapper: "text-white",
                      innerWrapper: "text-white",
                      label: "text-white",
                      mainWrapper: "text-white",
                      input: "text-white",
                    }}
                    isInvalid={isInvalidEmail}
                    color={isInvalidEmail ? "danger" : "primary"}
                    errorMessage="Please enter a valid email"
                    onValueChange={setValue}
                    isRequired
                    required
                    variant="underlined"
                    label="Email de contacto"
                  />
                </div>
              </div>

              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    label="Día del evento"
                    variant="faded"
                    labelPlacement="outside"
                    min={new Date().toISOString().split("T")[0]} // Fecha mínima es hoy
                    isRequired
                    required
                    class="text-white"
                    classNames={{
                      base: "text-white", // Color blanco en el contenedor base
                      inputWrapper: "text-white", // Color blanco en el contenedor del input
                      innerWrapper: "text-white", // Color blanco en el contenedor interno
                      mainWrapper: "text-white", // Color blanco en el contenedor principal
                      // Color blanco en el texto y placeholder
                    }}
                    color="secondary"
                    //   value={dateValue}
                    // onValueChange={setDateValue}
                    // isInvalid={isInvalidDate}
                    // color={isInvalidDate ? "primary" : "primary"}
                    // errorMessage="Por favor, introduce una fecha"
                  />
                </div>

                <Input
                  type="time"
                  id="time"
                  name="time"
                  label="Hora del evento"
                  variant="faded"
                  labelPlacement="outside"
                  isRequired
                  required
                  classNames={{
                    base: "text-white", // Color blanco en el contenedor base
                    inputWrapper: "text-white", // Color blanco en el contenedor del input
                    innerWrapper: "text-white", // Color blanco en el contenedor interno
                    label: "text-amber-200", // Color blanco en la etiqueta
                    mainWrapper: "text-white", // Color blanco en el contenedor principal
                    input: "text-white placeholder-white", // Color blanco en el texto y placeholder
                  }}
                  hourCycle={24}
                  minValue={new Time(5)}
                  color="secondary"
                  errorMessage="Introduce una hora válida"
                />
              </div>

              <div className=" grid gap-4 sm:grid-cols-2 ">
                <div className="date-picker-container">
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    label="Ciudad y provincia"
                    labelClassName="text-white"
                    isRequired
                    required
                    variant="underlined"
                    classNames={{
                      base: "text-white",
                      inputWrapper: "text-white",
                      innerWrapper: "text-white",
                      label: "text-white",
                      mainWrapper: "text-white",
                      input: "text-white",
                    }}
                    value={cityValue}
                    onValueChange={setCityValue}
                    isInvalid={isInvalidCity}
                    color={isInvalidCity ? "danger" : "primary"}
                    errorMessage="Te falta la ciudad o la provincia"
                  />
                </div>
                <div className="date-picker-container">
                  <Input
                    type="text"
                    id="evento"
                    name="evento"
                    classNames={{
                      base: "text-white",
                      inputWrapper: "text-white",
                      innerWrapper: "text-white",
                      label: "text-white",
                      mainWrapper: "text-white",
                      input: "text-white",
                    }}
                    isRequired
                    required
                    variant="underlined"
                    label="Lugar del evento"
                    value={lugarValue}
                    onValueChange={setLugarValue}
                    isInvalid={isInvalidLugar}
                    color={isInvalidLugar ? "danger" : "primary"}
                    errorMessage="El nombre ha de contener 4 caracteres al menos"
                  />
                </div>
              </div>

              <div class="my-6 grid gap-4 ">
                <Select
                  id="duracion"
                  name="duracion"
                  label="Selecciona la duración deseada"
                  variant="underlined"
                  isRequired
                  required
                  classNames={{
                    base: "text-white",
                    inputWrapper: "text-white",
                    innerWrapper: "text-white",
                    mainWrapper: "text-white",
                    input: "text-white",
                  }}
                  value={duraValue}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    setDuraValue(selectedValue); // Actualiza el valor seleccionado
                    console.log("Duración seleccionada:", selectedValue); // Imprime el valor seleccionado
                  }}
                  isInvalid={isInvalidDura}
                  color={isInvalidDura ? "danger" : "secondary"}
                  errorMessage="Campo requerido"
                >
                  <SelectItem color="warning" value="1h" key="1h">
                    1h
                  </SelectItem>
                  <SelectItem color="warning" value="1h 15m" key="1h 15m">
                    1h 15m
                  </SelectItem>
                  <SelectItem color="warning" value="1h 30m" key="1h 30m">
                    1h 30m
                  </SelectItem>
                  <SelectItem color="warning" value="1h 45m" key="1h 45m">
                    1h 45m
                  </SelectItem>
                  <SelectItem color="warning" value="2h" key="2h">
                    2h
                  </SelectItem>
                  <SelectItem color="warning" value="2h 30m" key="2h 30m">
                    2h 30m
                  </SelectItem>
                  <SelectItem color="warning" value="3h" key="3h">
                    3h
                  </SelectItem>
                </Select>
                {/* <div className="date-picker-container">
                  <Input
                    type="number"
                    id="budget"
                    name="budget"
                    step="100"
                    label="Presupuesto"
                    variant="underlined"
                    isRequired
                    required
                    value={budgetValue}
                    onValueChange={setBudgetValue}
                    isInvalid={isInvalidBudget}
                    color={isInvalidBudget ? "danger" : "primary"}
                    errorMessage="Introduce un número mayor de 0"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">€</span>
                      </div>
                    }
                  />
                </div> */}
              </div>

              <div class="my-6 grid gap-4 sm:grid-cols-2">
                <div className="date-picker-container">
                  <Input
                    type="text"
                    id="tlf"
                    name="tlf"
                    label="Teléfono de contacto"
                    variant="underlined"
                    isRequired
                    required
                    value={tlfValue}
                    onValueChange={setTlfValue}
                    isInvalid={isInvalidTlf}
                    color={isInvalidTlf ? "danger" : "primary"}
                    errorMessage="Introduce el prefijo"
                  />
                </div>
                <div className="date-picker-container">
                  <Input
                    type="tel"
                    id="tlfevento"
                    name="tlfevento"
                    label="Teléfono del palacio"
                    variant="underlined"
                    color="primary"
                  />
                </div>
              </div>

              <div class="my-6 grid gap-4 sm:grid-cols-2">
                <div className="date-picker-container">
                  <Input
                    type="number"
                    id="invite"
                    name="invite"
                    label="Número de invitados"
                    variant="underlined"
                    color="primary"
                    step="10"
                  />
                </div>
                <Select
                  id="music"
                  name="music"
                  label="Selecciona la música deseada"
                  variant="underlined"
                  isRequired
                  color="secondary"
                  classNames={{
                    base: "text-white",
                    inputWrapper: "text-white",
                    innerWrapper: "text-white",
                    mainWrapper: "text-white",
                    input: "text-white",
                  }}
                >
                  <SelectItem value="80s" key="80s">
                    Música de los 80
                  </SelectItem>
                  <SelectItem value="00s-actualidad" key="00s-actualidad">
                    Los 2000 y actualidad
                  </SelectItem>
                  <SelectItem
                    value="Mix 80s y 00s-actualidad"
                    key="Mix 80s y 00s-actualidad"
                  >
                    Mix de ambas
                  </SelectItem>
                </Select>
              </div>

              <div class="my-6 grid  sm:grid-cols-2">
                <div className="date-picker-container">
                  <Slider
                    id="valoracion"
                    name="valoracion"
                    label="¿Cuántas ganas tenéis de montar un fiestón?"
                    classNames={{
                      base: "text-white max-w-md gap-3",
                      track: "border-s-secondary-100",
                      filler:
                        "bg-gradient-to-r from-yellow-300 via-amber-500 to-amber-700",
                    }}
                    hideValue={true}
                    color="danger"
                    step={1}
                    maxValue={5}
                    minValue={0}
                    defaultValue={3}
                    showTooltip={true}
                    tooltipProps={{ content: "SUBE PARA QUE ARDA BOGOTÁ" }}
                    marks={[
                      {
                        value: 1,
                        label: "Algo tranquilito",
                      },
                    ]}
                  />
                </div>
                <div className="date-picker-container">
                  <Textarea
                    id="feed"
                    name="feed"
                    className="text-white"
                    rows="4"
                    color="warning"
                    label="¿Algo que nos quieras contar?"
                    variant="bordered"
                    labelPlacement="outside"
                    classNames={{
                      base: "text-white",
                      inputWrapper: "text-white",
                      innerWrapper: "text-white",
                      mainWrapper: "text-white",
                      input: "text-white",
                    }}
                  />
                </div>
              </div>
              <div class="my-6 grid text-sm sm:grid-cols-2">
                <Checkbox
                  className="text-sm"
                  isRequired
                  required
                  isSelected={isChecked}
                  onChange={handleCheckboxChange}
                >
                
                  
                  <Button color="warning" className="p-2 text-xs" onPress={onOpen}>Leer Política de privacidad</Button>
                  <Modal 
                  isOpen={isOpen} 
                  onOpenChange={onOpenChange}
                  placement="bottom"
                  size="sm"
                  scrollBehavior="inside"
                  
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader >
                            Política de privacidad
                          </ModalHeader>
                          <ModalBody>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: privacyData.content,
                              }}
                            />
                          </ModalBody>
                          <ModalFooter>
                           
                            <Button color="warning" onPress={onClose}>
                              Vale
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                 
                </Checkbox>
              </div>
              <div class="text-center">
                <button
                  disabled={!isChecked}
                  type="submit"
                  className={`w-full flex items-center justify-center border-2 px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform rounded-sm shadow focus:ring-4 focus:ring-opacity-50 focus:outline-none ${
                    isChecked
                      ? "bg-green-700/30 hover:bg-amber-600 border-amber-500 text-[#e3d779] focus:ring-green-500 hover:shadow-lg hover:-translate-y-1"
                      : "bg-gray-400 border-gray-500 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Enviar prereserva
                  <span class="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="w-5 h-5 fill-current"
                    >
                      <path
                        fill="currentColor"
                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SaveTheDateForm;
