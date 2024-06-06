import { Details } from "@mui/icons-material";
import React from "react";

const dataArr = {
  PatientName: "Ms. HIRA A MANI",
  MRNo: "306643",
  AgeYear: "33 Y 2 M 0 D ",
  Department: "Casualty",
  DoctorName: "Dr. Abeda P Inamdar",
  DoctorId: 174,
  Discharged: false,
  IsBillGenerated: false,
  AdmissionDate: "20/05/2024",
  dob: "20/03/1991",
  BedNo: "703",
  Height: null,
  Weight: null,
  Address: "104, Sharda vihar, Alandi",
  Gender: "Female",
  dobNew: "1991-03-20",
  AdmissionId: 1070966,
  IpdNo: "IP/24/90938",
  MedicationChartDetails: [
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      nameOfMedication: "A TO Z - NS TAB",
      dose: "1",
      route: "ORAL",
      frequency: "Per Hour",
      drugAdminHeaderId: 202957,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "03:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "03:00 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:42 PM",
              adminDoneBy: "Nilesh Shinde",
            },
            {
              timeSlot: "06:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "09:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "06:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "09:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "12:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "12:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
          ],
        },
      ],
    },
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      nameOfMedication: "CROCIN ADVANCE TAB",
      dose: "1",
      route: "ORAL",
      frequency: "Per Hour",
      drugAdminHeaderId: 202960,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "01:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "01:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "02:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "03:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "02:00 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:42 PM",
              adminDoneBy: "Nilesh Shinde",
            },
            {
              timeSlot: "03:00 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:43 PM",
              adminDoneBy: "Nilesh Shinde",
            },
            {
              timeSlot: "04:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "05:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "06:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "07:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "04:00 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:43 PM",
              adminDoneBy: "Nilesh Shinde",
            },
            {
              timeSlot: "05:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "06:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "07:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "12:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "08:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "09:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "10:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "11:00 AM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "12:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "08:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "09:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "10:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "11:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
          ],
        },
      ],
    },
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-05-22",
      nameOfMedication: "A TO Z SYRUP 100ML",
      dose: "1",
      route: "ORAL",
      frequency: "1---1---1---1",
      drugAdminHeaderId: 202958,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "03:30 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:42 PM",
              adminDoneBy: "Nilesh Shinde",
            },
            {
              timeSlot: "06:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "08:30 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
            {
              timeSlot: "11:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
          ],
        },
      ],
    },
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-05-22",
      nameOfMedication: "NOBEL 30GM GEL",
      dose: "1",
      route: "ORAL",
      frequency: "SOS",
      drugAdminHeaderId: 202959,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "04:00 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:42 PM",
              adminDoneBy: "Nilesh Shinde",
            },
          ],
        },
      ],
    },
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-05-22",
      nameOfMedication: "OMNICAL TAB (500MG+250IU)",
      dose: "1",
      route: "ORAL",
      frequency: "STAT",
      drugAdminHeaderId: 202962,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "06:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
          ],
        },
      ],
    },
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-05-28",
      nameOfMedication: "CALPOL SUSP 120MG",
      dose: "1",
      route: "ORAL",
      frequency: "1---0---1",
      drugAdminHeaderId: 202956,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "04:00 PM",
              isDrugAdminDone: true,
              adminDoneDateTime: "20/05/2024 03:41 PM",
              adminDoneBy: "Nilesh Shinde",
            },
            {
              timeSlot: "10:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
          ],
        },
      ],
    },
    {
      prescDateTime: "2024-05-20 03:38 PM",
      startDate: "2024-05-20",
      endDate: "2024-06-10",
      nameOfMedication: "Dolo o-susp 250mg/5ml",
      dose: "1",
      route: "ORAL",
      frequency: "0---0---1",
      drugAdminHeaderId: 202961,
      medicationChartDateDtoList: [
        {
          date: "2024-05-20",
          medicationChartTimeDtoList: [
            {
              timeSlot: "09:00 PM",
              isDrugAdminDone: false,
              adminDoneDateTime: "",
              adminDoneBy: null,
            },
          ],
        },
      ],
    },
  ],
};
function MedicationPrint() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="border">
        <thead className="border">
          <tr className="border whitespace-nowrap">
            <th className="border bg-gray-100" rowSpan={2}>
              Presc. Date Time
            </th>
            <th className="border bg-gray-100" rowSpan={2}>
              Start Date
            </th>
            <th className="border bg-gray-100" rowSpan={2}>
              End Time
            </th>
            <th className="border bg-gray-100" rowSpan={2}>
              Name of the Medication
            </th>
            <th className="border bg-gray-100" rowSpan={2}>
              Dose
            </th>
            <th className="border bg-gray-100" rowSpan={2}>
              Route
            </th>
            <th className="border bg-gray-100" rowSpan={2}>
              Frequency
            </th>

            <>
              {dataArr.MedicationChartDetails.map((dateKey,) => (
                <>
                  {
                    dateKey.medicationChartDateDtoList.map((listOfDate, index) => (
                      <th key={index} className="border bg-gray-100 text-center" colSpan={listOfDate.medicationChartTimeDtoList.length}>
                        {listOfDate.date}
                      </th>
                    ))
                  }
                </>
              ))
              }
            </>
          </tr>
          <tr>
            <>
              {dataArr.MedicationChartDetails.map((dateKey,) => (
                <>
                  {
                    dateKey.medicationChartDateDtoList.map((listOfDate, index) => (
                      <>
                        {
                          listOfDate.medicationChartTimeDtoList.map((timelist, index) => (
                            <>
                              <th className="whitespace-nowrap border  bg-gray-100">
                                {timelist.timeSlot}
                              </th>
                            </>
                          ))
                        }
                      </>
                    ))
                  }
                </>
              ))
              }
            </>
          </tr>
        </thead>
        <tbody>
          {
            dataArr.MedicationChartDetails.map((Details, index) => (

              <>
                <tr className="border ">
                  <td className="border whitespace-nowrap text-center">{Details.prescDateTime}</td>
                  <td className="border whitespace-nowrap text-center">{Details.startDate}</td>
                  <td className="border whitespace-nowrap text-center">{Details.endDate}</td>
                  <td className="border whitespace-nowrap text-center">{Details.nameOfMedication}</td>
                  <td className="border whitespace-nowrap text-center">{Details.dose}</td>
                  <td className="border whitespace-nowrap text-center">{Details.route}</td>
                  <td className="border whitespace-nowrap text-center">{Details.frequency}</td>
                  <>
                    {
                      Details.medicationChartDateDtoList.map((dateKey, index) => (
                        <>

                          {
                            dateKey.medicationChartTimeDtoList.map((timelist, timeindex) => (
                              <>
                                {timelist.adminDoneDateTime !== "" ? (
                                  <td className="border text-center" key={timeindex}>
                                    <input type="checkbox" checked={timelist.isDrugAdminDone} />
                                    <h1>   {timelist.adminDoneDateTime}</h1>
                                    <h1>{timelist.adminDoneBy}</h1>
                                  </td>
                                ) : (
                                  <td className="border text-center">-</td>
                                )}
                              </>


                            ))
                          }
                        </>

                      ))
                    }
                  </>
                </tr>
              </>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default MedicationPrint;