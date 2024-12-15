import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo debe contener letras y espacios")
    .required("Nombre es requerido"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Número de teléfono inválido")
    .required("Teléfono es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Email es requerido"),
  message: Yup.string().required("Mensaje es requerido"),
});

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      handleOnSubmit(values);
      resetForm();
      setIsButtonDisabled(true);
    },
  });

  useEffect(() => {
    setIsButtonDisabled(!isValid);
  }, [isValid]);

  const handleOnSubmit = async (values) => {
    const { name, phoneNumber, email, message } = values;

    const data = {
      firstName: name,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
      app: import.meta.env.PUBLIC_APP_NAME,
    };

    // try {
    //   const response = await fetch(import.meta.env.SECRET_APP_API_URL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await response.json();

    //   if (result.success) {
    //     toast.success("Mensaje enviado con éxito!", {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //   } else {
    //     toast.error(
    //       "Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde."
    //     );
    //   }
    // } catch (error) {
    //   toast.error(
    //     "Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde."
    //   );
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="bg-medium_gray w-full sm:w-[512px] lg:w-[614px] xl:w-[768px] h-auto my-10 sm:rounded-[16px] justify-center items-center flex flex-col">
        <div className="w-full flex justify-center text-center pt-[70px] px-4">
          <p className="text-white xl:text-[40px] xsm:w-[480px] lg:w-[500px] xl:w-[740px] text-[25px]">
            Completá este formulario y nos contactaremos en la brevedad
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" justify-center items-center flex flex-col gap-6 mt-10 px-4 w-full sm:w-[80%]"
        >
          <div className="flex flex-col w-full">
            <label className="text-white mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresá tu nombre completo"
              className="text-gray-400 p-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#48F6AD]"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {touched.name && errors.name ? (
              <div className="text-red-500 mt-1">{errors.name}</div>
            ) : null}
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white mb-1">Número de teléfono</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Ingresá tu número de teléfono"
              className="text-gray-400 p-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#48F6AD]"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            {touched.phoneNumber && errors.phoneNumber ? (
              <div className="text-red-500 mt-1">{errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white mb-1">Correo electrónico</label>
            <input
              type="text"
              name="email"
              placeholder="Ingresá tu correo electrónico"
              className="text-gray-400 p-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#48F6AD]"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <div className="text-red-500 mt-1">{errors.email}</div>
            ) : null}
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white mb-1">Mensaje para VioFit</label>
            <input
              type="text"
              name="message"
              placeholder="¿Sobre qué quieres charlar? Ingresá tu mensaje para VioFit"
              className="text-gray-400 p-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#48F6AD] truncate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {touched.message && errors.message ? (
              <div className="text-red-500 mt-1">{errors.message}</div>
            ) : null}
          </div>

          <div className="flex justify-center items-center my-10">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`group inline-block rounded-full p-[2px] text-white focus:outline-none focus:ring active:text-opacity-75 ${
                !isButtonDisabled
                  ? "bg-gradient-to-r from-[#47f6ab] via-[#47f6ab] to-[#60e3eb]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <span
                className={`block rounded-full px-8 py-3 text-sm font-medium transition ease-linear duration-300 ${
                  !isButtonDisabled
                    ? "bg-medium_gray group-hover:bg-transparent hover:text-medium_gray"
                    : "bg-medium_gray"
                }`}
              >
                Quiero que me contacten
              </span>
            </button>
          </div>
          {successMessage && (
            <div className="text-green-500 text-center">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
