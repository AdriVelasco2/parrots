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
import { ToastContainer, toast, Bounce } from "react-toastify";
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
  const [isVisible, setIsVisible] = useState(true);
  const dateInputRef = useRef(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const displayMsg = () => {
    toast.success("Prereserva enviada", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
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
    const tlf = formData.get("tlf");
    const tlfevento = formData.get("tlfevento");
    const email = formData.get("email");
    const invite = parseFloat(document.getElementById("invite").value);
    const music = formData.get("music");
    const valoracion = parseFloat(document.getElementById("valoracion").value);
    const feed = formData.get("feed");
    const fechaISO = formData.get("date");
    const conocieron = formData.get("conocieron");
    const fechaObj = new Date(fechaISO);

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
        fldqdRp24u8Y5HOin: evento,
        fld1ohGjqIVHa0cWk: tlf,
        fld6DvkeHBQqNKkoN: tlfevento,
        fldL1aEgyMIZs1iAd: email,
        fldVAPLZb2qCb2s5P: invite,
        fldckYyf3pEZYQGQv: music,
        fldQbQawI44b56g5l: feed,
        fldwOX55PL7u85m7y: valoracion,
        fldsMd7rd9bBn86Bm: conocieron,
      })
      .then((record) => {
        displayMsg();
        setIsVisible(false)
        // console.log("Created record:", record);
        
      })
      .catch((err) => {
        alert("Ha habido un error, la fecha no es correcta.");

        // console.error("Error creating record:", err);
      });
  };

  return (
    <>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        {isVisible ? (
          <div className="mx-14 mt-10 border-2 border-amber-400 rounded-lg">
            <h1
              id="contacto"
              class="text-4xl items-center mt-2 justify-center text-center  leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl"
            >
              SAVE THE DATE
            </h1>
            <div className="mt-4 text-center text-white">
              <h2>
                Pre-reserva y os contactaremos tras evaluar vuestra
                petición.
              </h2>
            </div>
            <form id="nameForm" onSubmit={handleSubmit} netlify>
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
                      label="Vuestro nombre y apellidos"
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

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                    label="¿A qué hora tocaríamos?"
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

                <div className="my-6 grid gap-4 ">
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
                      // console.log("Duración seleccionada:", selectedValue); // Imprime el valor seleccionado
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
                      color="primary"
                      errorMessage="Faltan números"
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
                    id="conocieron"
                    name="conocieron"
                    label="Dinos cómo nos conocisteis"
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
                    <SelectItem value="Bodas.net" key="Bodas.net">
                      Bodas.net
                    </SelectItem>
                    <SelectItem value="Instagram/Redes Sociales" key="Instagram/Redes Sociales">
                      Instagram/Redes Sociales
                    </SelectItem>
                    <SelectItem
                      value="Recomendados"
                      key="Recomendados"
                    >
                      Recomendados
                    </SelectItem>
                    <SelectItem
                      value="Nos habéis visto en persona"
                      key="Nos habéis visto en persona"
                    >
                      Nos habéis visto en persona
                    </SelectItem>
                    <SelectItem
                      value="Casualidad"
                      key="Casualidad"
                    >
                      Casualidad
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
                    <Button
                      color="warning"
                      className="p-2 text-xs"
                      onPress={onOpen}
                    >
                      He leído la Política de privacidad
                    </Button>
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
                            <ModalHeader>Política de privacidad</ModalHeader>
                            <ModalBody>
                              <div>
                                Titular y Responsable del tratamiento de los Datos
Av. de Alemania, 11
Correo electrónico de contacto del Titular: losparrotsclub@gmail.com

Tipos de Datos que recogemos
Entre las clases de Datos Personales que recoge esta Aplicación, ya sea directamente o a través de terceros, se encuentran:

Rastreadores
Datos de uso
cantidad de Usuarios
estadísticas de sesión
La información completa referente a cada categoría de Datos Personales que se recogen se proporciona en las secciones de la presente política de privacidad dedicadas a tal fin o mediante textos explicativos específicos que se muestran antes de la recogida de dichos Datos.
Los Datos Personales podrán ser proporcionados libremente por el Usuario o, en caso de los Datos de Uso, serán recogidos automáticamente cuando se utilice esta Aplicación.
Salvo que se indique lo contrario, todos los Datos solicitados por esta Aplicación son obligatorios y la negativa a proporcionarlos podrá imposibilitar que esta Aplicación pueda proceder a la prestación de sus servicios. En los casos en los que esta Aplicación indique específicamente que ciertos Datos no son obligatorios, los Usuarios serán libres de no comunicar tales Datos sin que esto tenga consecuencia alguna sobre la disponibilidad o el funcionamiento del Servicio.
Los Usuarios que tengan dudas sobre qué Datos son obligatorios pueden contactar con el Titular.
El uso de Cookies - o de otras herramientas de seguimiento - por parte de esta Aplicación o por los titulares de servicios de terceros utilizados por esta Aplicación tiene como finalidad la prestación del Servicio solicitado por el Usuario, además de cualesquiera otras finalidades que se describan en el presente documento y en la Política de Cookies.

El Usuario asume la responsabilidad respecto de los Datos Personales de terceros que se obtengan, publiquen o compartan a través de esta Aplicación.

Modalidad y lugar del tratamiento de los Datos recogidos
Modalidades de Tratamiento
El Titular tratará los Datos de los Usuarios de manera adecuada y adoptará las medidas de seguridad apropiadas para impedir el acceso, la revelación, alteración o destrucción no autorizados de los Datos.
El tratamiento de Datos se realizará mediante ordenadores y/o herramientas informáticas, siguiendo procedimientos y modalidades organizativas estrictamente relacionadas con las finalidades señaladas. Además del Titular, en algunos casos podrán acceder a los Datos ciertas categorías de personas autorizadas, relacionadas con el funcionamiento de esta Aplicación (administración, ventas, marketing, departamento jurídico y de administración de sistemas) o contratistas externos que presten servicios al Titular (tales como proveedores externos de servicios técnicos, empresas de mensajería, empresas de hosting, empresas de informática, agencias de comunicación) que serán nombrados por el Titular como Encargados del Tratamiento, si fuera necesario. Se podrá solicitar al Titular en cualquier momento una lista actualizada de dichas personas.

Lugar
Los Datos se tratan en las oficinas del Titular, así como en cualquier otro lugar en el que se encuentren situadas las partes implicadas en dicho proceso de tratamiento.
Dependiendo de la localización de los Usuarios, las transferencias de Datos pueden implicar la transferencia de los Datos de los Usuarios a otro país diferente al suyo propio. Para más información sobre el lugar de tratamiento de dichos Datos transferidos, los Usuarios podrán consultar la sección que contiene los detalles sobre el tratamiento de los Datos Personales.

Período de conservación
Salvo que se indique lo contrario en el presente documento, los Datos Personales serán tratados y conservados durante el tiempo necesario y para la finalidad por la que han sido recogidos y podrán conservarse durante más tiempo debido a una obligación legal pertinente o sobre la base del consentimiento de los Usuarios.

Finalidad del Tratamiento de los Datos recogidos
Los Datos relativos al Usuario son recogidos para permitir al Titular prestar su Servicio, cumplir sus obligaciones legales, responder a solicitudes de ejecución, proteger sus derechos e intereses (o los de sus Usuarios o terceros), detectar cualquier actividad maliciosa o fraudulenta, así como para las siguientes finalidades:

Remarketing y behavioral targeting
Publicidad
Estadísticas
Visualizar contenidos de plataformas externas
Hosting e infrastructura de backend
Gestión de Etiquetas
Optimización y distribución del tráfico
Información detallada del Tratamiento de los Datos Personales
Estadísticas
Los servicios contenidos en esta sección permiten al Titular monitorizar y analizar el tráfico web y pueden ser utilizados para rastrear el comportamiento del Usuario.

Google LLC
Google Analytics 4
Empresa:Google LLC +1

Lugar de tratamiento:EE.UU. +1

Datos Personales tratados:cantidad de Usuarios +3

Gestión de Etiquetas
Este tipo de servicio ayuda al Titular a gestionar las etiquetas o scripts que se necesitan en esta Aplicación de forma centralizada.
Esto supone que los Datos de los Usuarios pasan a través de estos servicios, lo que puede derivar en la retención de dichos Datos.

Google LLC
Google Tag Manager
Empresa:Google LLC

Lugar de tratamiento:EE.UU.

Datos Personales tratados:Datos de uso +1

Hosting e infrastructura de backend
Este tipo de servicios tienen por finalidad el alojamiento de Datos y archivos para permitir que esta Aplicación funcione y sea distribuida, así como para proporcionar una infrastructura lista para operar que permita poner en marcha diversas funcionalidades o partes de esta Aplicación.

Algunos servicios de los enumerados más adelante, en su caso, pueden funcionar mediante servidores geográficamente distribuidos, lo que dificulta la determinación de la localización exacta en la que se almacenan los Datos personales.

Netlify, Inc.
Netlify
Empresa:Netlify, Inc.

Lugar de tratamiento:EE.UU.

Datos Personales tratados:Datos de uso

Optimización y distribución del tráfico
Este tipo de servicios permiten a esta Aplicación distribuir sus contenidos a través de los servidores situados en diversos países y de optimizar el rendimiento de ésta.
Los Datos Personales tratados dependerán de las características y las modalidades de implementación de estos servicios, que por su propia naturaleza filtran las comunicaciones entre esta Aplicación y el navegador del Usuario.
Teniendo en cuenta la naturaleza distribuida de este sistema, es difícil determinar la localización exacta a la que se transfieren los contenidos que pueden contener Datos Personales del Usuario.

jsdelivr.com
jsDelivr CDN
Empresa:jsdelivr.com

Lugar de tratamiento:Polonia

Datos Personales tratados:Datos de uso

Publicidad
Este tipo de servicio permite que se utilicen los Datos de los Usuarios para fines de comunicación publicitaria. Estas comunicaciones se muestran en forma de banners y otros anuncios en esta Aplicación, posiblemente basados en los intereses de los Usuarios.
Esto no significa que todos los Datos Personales sean utilizados para esta finalidad. La información y condiciones de uso se detallan más adelante.
Algunos de los servicios enumerados a continuación pueden emplear Rastreadores para identificar a los Usuarios, behavioral retargeting, es decir, mostrar anuncios publicitarios personalizados en base a los intereses y al comportamiento del Usuario, o para medir el rendimiento de los anuncios. Para obtener más información, por favor verifique las políticas de privacidad de los servicios correspondientes.
Los servicios de este tipo normalmente permiten a los Usuarios inhabilitar dicho seguimiento. Los Usuarios pueden averiguar cómo inhabilitar la publicidad basada en intereses de forma más general visitando la sección sobre autoexclusión del presente documento.

Google LLC
Seguimiento de conversiones de Google Ads
Empresa:Google LLC +1

Lugar de tratamiento:EE.UU. +1

Datos Personales tratados:Datos de uso +1

Remarketing y behavioral targeting
Este tipo de servicios permiten a esta Aplicación y a sus partners distribuir, optimizar y mostrar anuncios publicitarios basados en el historial de uso de esta Aplicación por el Usuario.
Esta actividad es facilitada mediante el seguimiento de los Datos de los Usuarios y utilizando Rastreadores para recopilar información que se transmite a continuación a los socios que gestionan la actividad de remarketing y segmentación por comportamiento.
Algunos servicios ofrecen una opción de remarketing basada en listas de direcciones de correo electrónico.
Los servicios de este tipo normalmente permiten a los Usuarios inhabilitar dicho seguimiento. Los Usuarios pueden averiguar cómo inhabilitar la publicidad basada en intereses de forma más general visitando la sección sobre autoexclusión del presente documento.

Google LLC
Remarketing de Google Ads
Empresa:Google LLC +1

Lugar de tratamiento:EE.UU. +1

Datos Personales tratados:Datos de uso +1

Visualizar contenidos de plataformas externas
Este tipo de servicios permiten visualizar contenidos alojados en plataformas externas directamente desde las páginas de esta Aplicación e interactuar con estos. A menudo dichos servicios se denominan widgets, que son pequeños elementos colocados en una página web o aplicación. Proporcionan información específica o realizan una función concreta y a menudo permiten la interacción con los usuarios.
Este tipo de servicios puede recopilar datos de tráfico web para las páginas en las que estén instalados incluso en caso de que el Usuario no los utilice.

Spotify AB
Widgets Spotify
Empresa:Spotify AB

Lugar de tratamiento:Suecia

Datos Personales tratados:Datos de uso +1

Información sobre la inhabilitación de la publicidad basada en intereses
Además de las funcionalidades de inhabilitación ofrecidas por cualquiera de los servicios enumerados en el presente documento, los Usuarios podrán obtener más información general sobre cómo inhabilitar la publicidad basada en intereses en la sección específica de la Política de Cookies.

Política de Cookies
Esta Aplicación utiliza Rastreadores. Para obtener más información, los Usuarios pueden consultar la Política de Cookies.

Más información para los usuarios en la Unión Europea
Esta sección se aplica a todos los Usuarios de la Unión Europea, de acuerdo con el Reglamento General de Protección de Datos (el "GDPR"), y, para dichos Usuarios, reemplaza cualquier otra información posiblemente divergente o conflictiva contenida en la política de privacidad. En la sección titulada "Información detallada sobre el tratamiento de Datos Personales" dentro de este documento se pueden encontrar más detalles sobre las categorías de Datos tratados, los fines del tratamiento, las categorías de destinatarios de los Datos Personales, en su caso, y más información sobre los Datos Personales.

Base jurídica del Tratamiento
El Titular podrá tratar los Datos Personales del Usuario, si se cumple una de las siguientes condiciones:

Cuando los Usuarios hayan dado su consentimiento para una o más finalidades específicas.
Cuando la obtención de Datos sea necesaria para el cumplimiento de un contrato con el Usuario y/o cualquier otra obligación precontractual del mismo;
Cuando el tratamiento sea necesario para el cumplimiento de una obligación legal de obligado cumplimiento por parte del Usuario;
Cuando el tratamiento esté relacionado con una tarea ejecutada en interés público o en el ejercicio de competencias oficiales otorgadas al Titular;
Cuando el tratamiento sea necesario con el fin de un interés legítimo perseguido por el Titular o un tercero.
En cualquier caso, el Titular está a su disposición para definir las bases jurídicas específicas que se aplican al tratamiento y en particular, si la obtención de los Datos Personales es un requisito contractual o estatutario o un requisito necesario para formalizar un contrato.
Más información sobre el tiempo de retención
Salvo que se indique lo contrario en el presente documento, los Datos Personales serán tratados y conservados durante el tiempo necesario y para la finalidad por la que han sido recogidos y podrán conservarse durante más tiempo debido a una obligación legal pertinente o sobre la base del consentimiento de los Usuarios.

Por lo tanto:

Los Datos Personales recogidos para la formalización de un contrato entre el Titular y el Usuario deberán conservarse como tales hasta en tanto dicho contrato se haya formalizado por completo.
Los Datos Personales recogidos en legítimo interés del Titular deberán conservarse durante el tiempo necesario para cumplir con dicha finalidad. Los Usuarios pueden encontrar información específica relacionada con el interés legítimo del Titular consultando las secciones relevantes del presente documento o contactando con el Titular.
El Titular podrá conservar los Datos Personales durante un periodo adicional cuando el Usuario preste su consentimiento a tal tratamiento, siempre que dicho consentimiento siga vigente. Además, el Titular podrá estar obligado a conservar Datos Personales durante un periodo adicional siempre que se precise para el cumplimiento de una obligación legal o por orden que proceda de la autoridad.

Una vez terminado el período de conservación, los Datos Personales deberán eliminarse. Por lo tanto, los derechos de acceso, supresión, rectificación y de portabilidad de datos no podrán ejercerse una vez haya expirado dicho periodo de conservación.

Los derechos de los Usuarios basados en el Reglamento General de Protección de datos (RGPD)
Los Usuarios podrán ejercer ciertos derechos en relación con sus Datos que sean tratados por el Titular.

En particular, los Usuarios tienen derecho a hacer lo siguiente, en la medida en que lo permita la ley:

Retirar su consentimiento en cualquier momento. Los Usuarios tienen derecho a retirar su consentimiento cuando lo hubieran otorgado con anterioridad para el tratamiento de sus Datos Personales.
Objeción al tratamiento de sus Datos. Los Usuarios tienen derecho a oponerse al tratamiento de sus Datos si dicho tratamiento se lleva a cabo con arreglo a una base jurídica distinta del consentimiento.
Acceso a sus Datos. Los Usuarios tienen derecho a saber si sus Datos son tratados por el Titular, a obtener información sobre ciertos aspectos del tratamiento, así como a obtener una copia de los Datos objeto del tratamiento.
Verificar y solicitar la rectificación. Los Usuarios tienen derecho a verificar la exactitud de sus Datos y solicitar que los mismos se actualicen o corrijan.
Limitar el tratamiento de sus Datos. Los Usuarios tienen derecho a limitar el tratamiento de sus Datos. En ese supuesto, el Titular solo tratará sus Datos con la finalidad de almacenarlos.
Borrar o eliminar los Datos Personales. Los Usuarios tienen derecho a obtener la supresión de sus Datos por parte del Titular.
Recibir sus Datos y transferirlos a otro responsable. Los Usuarios tienen derecho a recibir sus Datos en un formato estructurado, de uso común y lectura mecánica y, si fuera técnicamente posible, a que se transmitan los mismos a otro responsable sin ningún impedimento.
Presentar una reclamación. Los Usuarios tienen derecho a presentar una reclamación ante la autoridad competente en materia de protección de Datos Personales.
Los Usuarios también tendrán derecho a conocer las bases legales de las transferencias de Datos al extranjero, incluido a cualquier organización internacional que se rija por el Derecho Internacional Público o que esté formada por dos o más países, como la ONU, y a conocer las medidas de seguridad tomadas por el Titular para salvaguardar sus Datos.

Información sobre el derecho de oposición al tratamiento
Cuando el tratamiento de los Datos Personales se realice en interés público, en el ejercicio de poderes públicos conferidos al Titular o con motivo de un interés legítimo perseguido por el Titular, los Usuarios podrán oponerse a dicho tratamiento alegando un motivo relacionado con su situación particular para justificar su oposición.

Los Usuarios deben saber, sin embargo, que en caso de que sus Datos Personales sean tratados con fines de marketing directo, pueden oponerse en cualquier momento a tal tratamiento, de forma gratuita y sin necesidad de justificación. Cuanto el Usuario se oponga al tratamiento para fines de marketing directo, los Datos Personales no podrán continuar siendo tratados para tales fines. Para saber si los Datos Personales de los Usuarios están siendo tratados por el Titular para fines de marketing directo, los Usuarios deberán consultar las secciones relevantes del presente documento.

Cómo ejercer estos derechos
Cualquier solicitud de ejercicio de los derechos del Usuario puede dirigirse al Propietario a través de los datos de contacto facilitados en este documento. Dichas solicitudes son gratuitas y el Titular responderá a ellas tan pronto como le sea posible y siempre dentro del plazo de un mes, proporcionando a los Usuarios la información exigida por la ley. El Titular comunicará cualquier rectificación o supresión de Datos Personales o limitación del tratamiento a cada destinatario, en su caso, al que se le hayan comunicado los Datos Personales, salvo que sea imposible o exija un esfuerzo desproporcionado. A solicitud de los Usuarios, el Titular les informará sobre dichos destinatarios.

Información adicional sobre la recogida de Datos y su tratamiento
Defensa jurídica
Los Datos Personales del Usuario podrán ser utilizados para la defensa jurídica del Titular ante un tribunal o en las fases judiciales previas a un posible pleito derivado del uso inapropiado de esta Aplicación o de los Servicios relacionados.
El Usuario declara conocer que el Titular puede ser requerido por las autoridades públicas a fin de revelar Datos Personales.

Información adicional acerca de los Datos Personales del Usuario
Además de las informaciones contenidas en esta política de privacidad, esta Aplicación podrá proporcionar al Usuario información adicional y contextual relativa a Servicios específicos o a la recogida y tratamiento de los Datos Personales.

Log del sistema y mantenimiento
Por motivos relativos al funcionamiento y mantenimiento, esta Aplicación y cualquier otro servicio, proporcionado por terceros, que se utilice, podrá recoger un registro del sistema; es decir, archivos que registren la interacción con esta Aplicación y que puedan contener Datos Personales, tales como la dirección IP del Usuario.

Información no contenida en esta política de privacidad
Se podrá solicitar en cualquier momento información adicional sobre la recogida y el tratamiento de los Datos Personales al Titular. La información de contacto se indica al inicio del presente documento.

Modificación de la presente política de privacidad
El Titular se reserva el derecho de modificar esta política de privacidad en cualquier momento, notificándolo a los Usuarios a través de esta página y, a ser posible, a través de esta Aplicación y/o de ser técnica y legalmente posible notificando directamente a los Usuarios, en caso de que el Titular cuente con la información de contacto necesaria a tal fin. Se recomienda encarecidamente que revisen esta página con frecuencia, tomando como referencia la fecha de la última actualización indicada al final de la página.

En el caso de que los cambios afectasen a las actividades de tratamiento realizadas en base al consentimiento del Usuario, el Titular deberá obtener, si fuera necesario, el nuevo consentimiento del Usuario.

Definiciones y referencias legales
Datos Personales (o Datos)
Constituye un dato personal cualquier información que, directa, indirectamente o en relación con otra información – incluyendo un número de identificación personal – permita identificar a una persona física.

Datos de Uso
Las informaciones recogidas de forma automática por esta Aplicación (o por servicios de terceros utilizados por esta Aplicación), podrán incluir: las direcciones IP o nombres de dominio de los ordenadores utilizados por el Usuario que se conecte a esta Aplicación, las direcciones URI (Uniform Resource Identifier), la hora de la solicitud, el método utilizado para realizar la solicitud al servidor, las dimensiones del archivo obtenido en respuesta, el código numérico indicando el estado de la respuesta del servidor (resultado satisfactorio, error, etc.), el país de origen, las características del navegador y del sistema operativo utilizados por el visitante, las diversas coordenadas temporales de la visita (por ejemplo, el tiempo de permanencia en cada una de las páginas) y los detalles relativos al itinerario seguido dentro de la Aplicación, con especial referencia a la secuencia de páginas consultadas, a los parámetros relativos al sistema operativo y al entorno informático del Usuario.

Usuario
El individuo que utilice esta Aplicación, quien, a menos que se indique lo contrario deberá coincidir con el Interesado.

Interesado
La persona física a la que se refieren los Datos Personales.

Encargado del Tratamiento (o Encargado)
La persona física o jurídica, administración pública, agencia o cualquier otra institución, que procese los Datos Personales en nombre del Responsable del Tratamiento, descrita en la presente política de privacidad.

Responsable del Tratamiento (o Titular)
La persona física o jurídica, administración pública, agencia o cualquier otra institución, que actuando en solitario o conjuntamente con otras, determine las finalidades y las medidas del tratamiento de los Datos Personales, incluyendo las medidas de seguridad relativas al funcionamiento y al uso de esta Aplicación. A menos que se especifique lo contrario, el Responsable del Tratamiento es el Titular de esta Aplicación.

Esta Aplicación
El medio a través del cual se han recogido y tratado los Datos Personales del Usuario.

Servicio
El servicio proporcionado por esta Aplicación, tal y como se describe en las definiciones y referencias legales (en caso de estar disponibles) y en esta página o aplicación.

Unión Europea (o UE)
A menos que se indique lo contrario, todas las referencias hechas a la Unión Europea en el presente documento incluyen todos los actuales Estados miembros de la Unión Europea y del Espacio Económico Europeo.

Cookie
Las Cookies son Rastreadores que consisten en pequeñas cantidades de datos almacenados en el navegador del Usuario.

Rastreador
Rastreador designa cualquier tecnología - p.ej. Cookies, identificadores únicos, balizas web, scripts incrustados, etiquetas de entidad y creación de huella digital - que permite rastrear a los Usuarios, por ejemplo, accediendo a información o almacenándola en el dispositivo del Usuario.

Información legal
Esta política de privacidad se refiere sólo a esta Aplicación, a menos que se indique lo contrario en el presente documento.
                              </div>
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
        ) : (
          <div>
            <h1 class="pt-16 pb-4 text-4xl items-center justify-center text-center mt-4 leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl">
              Gracias por enviar tu prerreserva
            </h1>
            <div class="flex justify-center">
              <img
                src="/thanks.jpg"
                alt="grupo"
                class="pb-12 opacity-80 rounded-md w-full max-w-xs sm:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SaveTheDateForm;
