interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor appointment system  v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View clinic information',
    'View appointment details',
    'View healthcare provider information',
    'View medical staff profiles',
  ],
  ownerAbilities: [
    'Manage patient history records',
    'Manage user accounts',
    'Manage clinic information',
    'Manage appointments',
    'Manage insurance providers',
    'Manage healthcare providers',
    'Manage medical staff',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ee543dc3-4eb2-4e2b-b857-2332e048b473',
};
