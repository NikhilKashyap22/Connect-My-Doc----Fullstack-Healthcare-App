export const environment = {
  production: false,

  services: {
    appointments: 'http://localhost:8080/api/appointments',
    clinics: 'http://localhost:8081/api/clinics',
    doctors: 'http://localhost:8082/api/doctors',
    patients: 'http://localhost:8083/api/patients',
    masterdata: 'http://localhost:8086/api/masterdata',
    // authentication: 'http://localhost:8081/api/auth',
    // diagnostics: 'http://localhost:8087/api/diagnostics',
  } as { [key: string]: string },

  apiPaths: {
    doctors: {
      getDoctorById: '/{id}',
      getAllDoctors: '/all',
      createDoctor: '/create',
      updateDoctor: '/update/{id}',
      deleteDoctor: '/delete/{id}',
    },
    patients: {
      getPatientById: '/{id}',
      getAllPatients: '/all',
      registerPatient: '/register',
    },
    clinics: {
      getClinicById: '/{id}',
      getAllClinics: '/all',
      createClinic: '/create',
    },
    appointments: {
      createAppointment: '/create',
      getAppointmentsByDoctor: '/doctor/{doctorId}',
      getAppointmentsByPatient: '/patient/{patientId}',
    },
    authentication: {
      login: '/login',
      register: '/register',
      logout: '/logout',
    },
    masterdata: {
      getSpecializations: '/specializations',
      getDepartments: '/departments',
    },
    diagnostics: {
      bookService: '/book',
      getAvailableServices: '/services',
    },
  } as { [key: string]: { [key: string]: string } },
};
