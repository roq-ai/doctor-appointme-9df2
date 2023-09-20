const mapping: Record<string, string> = {
  appointments: 'appointment',
  clinics: 'clinic',
  'healthcare-providers': 'healthcare_provider',
  'insurance-providers': 'insurance_provider',
  'medical-staffs': 'medical_staff',
  'patient-histories': 'patient_history',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
