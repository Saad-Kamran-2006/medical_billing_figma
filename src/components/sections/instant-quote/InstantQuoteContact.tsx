"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GetQuoteSchema } from "@/lib/schemas/userschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RiWhatsappLine } from "react-icons/ri";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { toast } from "sonner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { BaseSyntheticEvent } from "react";
// import { submitContactForm } from "@/action/contact";
// import getCodeDetails from "@/components/utils/countaryCodes";

type ContactFormValues = z.infer<typeof GetQuoteSchema>;
type SubmitHandler<T> = (data: T, event?: BaseSyntheticEvent) => void | Promise<void>;


const InstantQuoteContact = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  // eslint-disable-next-line
  const [error, setError] = useState<string | undefined>("");
  const [isSelected, setIsSelected] = useState<string | undefined>(undefined);
  const [isSpecialitySelected, setIsSpecialitySelected] = useState<
    string | undefined
  >(undefined);
  const [phone, setPhone] = useState<string | undefined>("");
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.getElementById("cf-turnstile");
      if (container) {
        const tokenValue = container.getAttribute("turnstile-token");
        if (tokenValue) {
          setIsVerified(true);
          clearInterval(interval); // Stop checking once token is found
        }
      }
    }, 500); // Check every 500ms

    return () => clearInterval(interval);
  }, []);

  const validateUSNumber = (phone: string | undefined) => {
    if (phone !== undefined) {
      const formattedPhone = "+" + phone.replace(/\D/g, "");

      const parsedNumber = parsePhoneNumberFromString(formattedPhone, "US");
      if (parsedNumber === undefined) {
        if (phone.length > 0 && phone.length < 11) {
          setPhoneError(`Incomplete number, ${11 - phone.length} digits left`);
        }
      } else if (parsedNumber !== undefined) {
        if (phone.length > 0 && phone.length < 11) {
          setPhoneError(`Incomplete number, ${11 - phone.length} digits left`);
        } else if (phone.length === 11) {
          setPhoneError("");
        }
      }
    } else if (phone === undefined) {
      setPhoneError("");
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(GetQuoteSchema),
    mode: "onChange",
  });

  const selectedCategory = watch("category");
  // Track changes when the user selects a new value
  useEffect(() => {
    setIsSelected(selectedCategory);
  }, [selectedCategory]);

  const selectedSpeciality = watch("specialities");
  // Track changes when the user selects a new value
  useEffect(() => {
    setIsSpecialitySelected(selectedSpeciality);
  }, [selectedSpeciality]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (
    values: ContactFormValues,
    e: any
  ) => {
    const date: string = new Date().toISOString();

    // if (values.collection === "") {
    //   values.collection = undefined;
    // }
    // console.log(values);
    // console.log(e);

    // if (Number(values.collection) === 0) {
    //   values.collection = undefined;
    // }

    const formDetails = {
      name: values.name,
      email: values.email,
      practice_company: values.practice_company,
      phone: values.phone,
      date: date,
    };

    try {
      //? =============  Route Handlers  ================

      // const request = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formDetails),
      // });

      // const response = await request.json();

      //? =============  Server Action  ================

      const response = await submitContactForm(formDetails);

      if (response !== undefined) {
        if (response.success) {
          toast.success(response.message);
          reset();
        } else if (response.success) {
          toast.error(response.message);
        }
      }
      // eslint-disable-next-line
    } catch (error) {
      // console.log("Error:", error);
      throw new Error("Unexpected error trying to resolve");
    }

    const formElement = e?.target as HTMLFormElement | undefined;
    if (!formElement) {
      setError("Unexpected error occurred. Please try again.");
      toast.error("Unexpected error occurred. Please try again.");
      return;
    }
    const formData = new FormData(formElement);

    const turnstileRes = formData.get("cf-turnstile-response") as string;

    if (!turnstileRes) {
      setError("Please verify before submitting.");
      toast.error("Please verify before submitting.");
      return;
    }

    setFormStatus(
      "Thank you for reaching out! Our team will contact you shortly."
    );
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  };

  return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                {/* Name */}
                <div className="order-3">
                  <Label htmlFor="name" className="font-semibold">
                    Name <span className="text-red-500">&#42;</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your Name"
                    className={`${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "transition duration-150 ease-in-out focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[.8rem] font-medium text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Practice & Company */}
                <div className="order-5 md:order-4">
                  <Label
                    htmlFor="practice_or_company"
                    className="font-semibold"
                  >
                    Practice & Company{" "}
                    <span className="text-red-500">&#42;</span>
                  </Label>
                  <Input
                    id="practice_or_company"
                    type="text"
                    {...register("practice_company")}
                    // placeholder="e.g. Family Health Center"
                    placeholder="e.g. Dr. Smith's Practice"
                    className={`${
                      errors.practice_company
                        ? "border-red-500 focus:border-red-500"
                        : "transition duration-150 ease-in-out focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-200"
                    }`}
                  />
                  {errors.practice_company && (
                    <p className="mt-1 text-[.8rem] font-medium text-red-500">
                      {errors.practice_company.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="order-4 md:order-5">
                  <Label htmlFor="email" className="font-semibold">
                    Email <span className="text-red-500">&#42;</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className={`${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "transition duration-150 ease-in-out focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[.8rem] font-medium text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="order-7 md:order-6">
                  <Label htmlFor="phone" className="font-semibold">
                    Phone{" "}
                    <span className="text-xs text-clr-secondary font-medium">
                      {"(Optional)"}
                    </span>
                  </Label>
                  <PhoneInput
                    {...register("phone")}
                    country={"us"} // Default country
                    value={phone}
                    onlyCountries={["us"]}
                    // regions={["north-america", "carribean"]}
                    onChange={(phone) => {
                      setPhone(phone.length > 0 ? phone : undefined);
                      setValue("phone", phone.length > 0 ? phone : undefined);
                      // validatePhoneNumber(phone);
                      setIsPhoneActive(phone.length > 0 && phone.length < 11);
                      validateUSNumber(phone.length > 0 ? phone : undefined);
                    }}
                    inputClass="!w-full md:min-w-full px-4 py-2 border rounded-md focus:outline-none"
                    containerClass="w-full"
                    buttonClass="border-r"
                    dropdownClass="custom-dropdown"
                  />
                  {phoneError && (
                    <p className="mt-1 text-[.8rem] font-medium text-red-500">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>


              <Button
                type="submit"
                className={`w-full rounded-md bg-clr-primary/85 py-2 text-center font-medium text-white hover:bg-clr-primary 
                  ${
                    isSubmitting
                      ? "bg-clr-primary/60 bg-opacity-60 hover:bg-clr-primary/60 hover:bg-opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                disabled={!(isValid && isVerified) || isPhoneActive}
              >
                {!isSubmitting ? "Submit" : "Submitting..."}
              </Button>
            </form>
    </div>
  )
}

export default InstantQuoteContact