"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Field from "../components/Fields/Field";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Button from "../components/Buttons/Button";
import { motion } from "framer-motion";
import { useSendApplication } from "../hooks/useSendApplication";
import ProjectModal from "../components/Projects/ProjectModal";
import ProjectCard from "../components/Projects/ProjectCard";
import { ProjectApply } from "../lib/types";
import { projectsApply } from "../data/projects";

interface FormProps {
  isModalOpen: boolean;
  selectedProject: ProjectApply | null;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleProjectInfoClick: (project: ProjectApply) => void;
}
const Form = ({ handleProjectInfoClick }: FormProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [chosenProjects, setProjects] = useState<Array<string>>([]);
  const [errorArray, setErrorArray] = useState<Array<string>>([]);
  const formData = new FormData();
  const { mutate, isSuccess: sent } = useSendApplication({ setErrorArray });
  const sendApplication = () => {
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone_number", phone.replaceAll(" ", ""));
    formData.append("about", about);
    formData.append("projects_to_join", JSON.stringify(chosenProjects));
    mutate(formData);
  };

  const toggleProjectSelection = (projectName: string) => {
    setProjects((prev) =>
      prev.includes(projectName)
        ? prev.filter((item) => item !== projectName)
        : [...prev, projectName]
    );
  };

  return (
    <>
      {!sent ? (
        <div className="bg-gray-lighter rounded-lg">
          <div className="px-6 py-2">
            <p className="laptop:text-[20px] text-[16px] pt-4">
              Personlig Informasjon
            </p>
          </div>
          <div className="flex laptop:flex-row flex-col">
            <div>
              <div className="px-6 flex gap-[10px]">
                <div className="w-[200px] min-w-[100px] py-2">
                  <Field
                    id="first_name"
                    label="Fornavn"
                    placeholder="Cogitron"
                    value={firstName}
                    setValue={setFirstName}
                    errorArray={errorArray}
                    type={"text"}
                  />
                </div>
                <div className="w-[200px] min-w-[100px] py-2">
                  <Field
                    id="last_name"
                    label="Etternavn"
                    placeholder="Cogito"
                    value={lastName}
                    setValue={setLastName}
                    errorArray={errorArray}
                    type={"text"}
                  />
                </div>
              </div>
              <div className="px-6 gap-[10px] flex-col">
                <div className="flex-1 py-2 max-w-[410px] min-w-[100px]">
                  <Field
                    id="email"
                    label="Epost"
                    placeholder="Cogitron@cogito-ntnu.no"
                    value={email}
                    setValue={setEmail}
                    errorArray={errorArray}
                    type={"text"}
                  />
                </div>
                <div className="flex-1 py-2 max-w-[410px] min-w-[100px]">
                  <Field
                    id="phone_number"
                    label="Telefon"
                    placeholder="000 00 000"
                    value={phone}
                    setValue={setPhone}
                    errorArray={errorArray}
                    type={"numbers"}
                  />
                </div>
              </div>
            </div>
            <div className="laptop:w-[900px] laptop:min-w-[200px] max-w-[1000px] min-w-[100px] px-6 py-2">
              <Field
                id="about"
                label="Om deg selv"
                value={about}
                setValue={setAbout}
                type={"area"}
              />
            </div>
          </div>
          <div className="px-6 py-2">
            <div className="w-full flex">
              <p className="laptop:text-[20px] text-[16px] font-semibold w-full">
                Velg Prosjekt
              </p>
              <p className="laptop:text-[20px] phone:text-[16px] text-[12px] justify-end flex w-full text-blue-dark">
                Velg minst 3 prosjekter
              </p>
            </div>
            <div className="tablet:py-4 py-2 w-full tablet:flex-wrap tablet:gap-x-4 flex-wrap flex">
              {projectsApply.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  isSelected={chosenProjects.includes(project.name)}
                  priority={
                    chosenProjects.includes(project.name)
                      ? chosenProjects.indexOf(project.name) + 1
                      : null
                  }
                  toggleSelection={toggleProjectSelection}
                  onInfoClick={handleProjectInfoClick}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full phone:px-6 px-4 phone:py-6 py-4 laptop:text-[20px] text-[12px]">
            <div className="flex justify-start w-full ">
              <Button
                text={"Send inn søknad"}
                onClick={() => sendApplication()}
                px={"6"}
                py={"4"}
                icon={"ArrowRight"}
                color={"pink"}
                disabled
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="tablet:h-[400px] h-[500px] w-full flex justify-center text-center items-center px-2">
          <div>
            <p className="font-medium tablet:text-[20px] text-[14px] tracking-wider leading-[30px]">
              Takk for at du sendte inn søknad!
            </p>
            <p className="tablet:text-[16px] text-[14px]">
              Oppmøte og datoer vil bli sendt til deg på epost/telefon snarest
              mulig. Vi gleder oss til å møte deg!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const Due = () => {
  return (
    <>
      <div className="h-80 flex gap-8 items-center justify-center w-full">
        <div>
          <img
            className="tablet:w-[130px] w-[100px] stroke-blue-darker"
            src="/cogito_blue.svg"
            alt="logo"
          />
        </div>
        <div className="w-[500px] tracking-wide">
          <p className=" font-bold text-blue-darker leading-[30px]">
            <span className="text-[16px] font-normal text-blue-darkest">
              Søknadsperioden for å bli med som prosjektmedlem i Cogito{" "}
              <span className="text-pink-default font-semibold">
                er nå avsluttet
              </span>
              . Men fortvil ikke! Vi vil søke etter nye prosjektmedlemmer neste
              semester og vær på utkikk etter verv i nær framtid.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

const Apply = () => {
  // TODO: Refactor with Formik
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectApply | null>(
    null
  );
  const dueDate = new Date("2025-08-23");
  const handleProjectInfoClick = (project: ProjectApply) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const isDueDate = (dueDate: Date): boolean => {
    const currDate = new Date();
    return currDate > dueDate;
  };

  return (
    <>
      <Head>
        <title>Meld deg på - Cogito NTNU</title>
      </Head>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.0],
        }}
        className="w-full h-full laptop:pt-[200px] pt-[150px]"
      >
        <div className="relative flex justify-center h-full w-full z-[50] px-[30px]">
          <div className="relative ">
            <div className="absolute top-0 left-0 tablet:w-[200px] w-[150px] tablet:h-[50px] h-[40px] tablet:-mt-[50px] -mt-[40px] bg-white z-[50] rounded-t-3xl text-center tablet:py-4 py-2 drop-shadow-md">
              <p className="font-medium">Medlem</p>
            </div>
            {/* <div className="absolute top-0 tablet:left-[120px] left-[100px] tablet:w-[200px] w-[150px] tablet:h-[50px] h-[40px] tablet:-mt-[50px] -mt-[40px] bg-white z-[40] rounded-t-3xl text-center tablet:py-4 py-2">
              <p className="font-medium">Verv</p>
            </div> */}
          </div>
          <div className="tablet:w-[80%] w-[110%] h-fit pb-8 bg-white rounded-b-3xl rounded-tr-3xl drop-shadow-2xl z-[60]">
            <p className="font-bold laptop:text-[30px] tablet:text-[26px] text-[18px] text-blue-dark px-6 pt-8 pb-4">
              Søknad - Høstsemesteret 2024
            </p>
            <div className="w-full h-fit flex justify-center">
              <div className="w-[95%] h-fit rounded-3xl">
                {isDueDate(dueDate) ? (
                  <Due />
                ) : (
                  <Form
                    handleProjectInfoClick={handleProjectInfoClick}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    selectedProject={selectedProject}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      <ProjectModal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        project={selectedProject}
      />
      <Footer />
    </>
  );
};
export default Apply;
