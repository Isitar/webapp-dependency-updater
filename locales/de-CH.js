export default {
  cockpit: 'Cockpit',
  app: {
    name: 'Isitar Dependency Updater',
    slogan: 'Automatische Dependency-Updates richtig gemacht',
  },
  editSubject: '{subject} bearbeiten',
  createSubject: '{subject} erstellen',
  noFilter: 'Kein Filter',
  project: {
    singular: 'Projekt',
    plural: 'Projekte',
    name: 'Name',
    id: 'Id',
    platformId: '@:platform.singular @:platform.id',
    platformName: '@:platform.singular',
    projectType: 'Projekt-Typen',
    updateFrequency: 'Update Frequenz',
    targetBranch: 'Ziel-Branch',
    platformProjectId: 'Externe Projekt-Id',
    url: 'URL',
    details: 'Details',
    repositoryInformation: 'Repository Informationen',
    updaterInformation: 'Updater Informationen',
    outdated: 'Updates verfügbar',
    upToDate: 'Aktuell',
    updateDependencies: 'Abhängigkeiten aktualisieren',
    updateRequested: "Aktualisierung ausstehend",
    updating: "Am aktualisieren",
  },
  platform: {
    singular: 'Platform',
    plural: 'Platformen',
    id: 'Id',
    name: 'Name',
    platformType: 'Typ',
    privateKey: 'Privater Schlüssel',
    apiBaseUrl: 'API Basis URL',
    token: 'Token',
    details: 'Details',
    auth: 'Authentifizierung',
    gitUserName: 'Git Username',
    gitUserEmail: 'Git E-Mail',
    git: 'Git',
  },
  paths: {
    platforms: 'platformen',
    projects: 'projekte',
  },
  platformType: {
    1: 'GitLab',
    2: 'GitHub',
  },
  projectType: {
    0: 'Nicht definiert',
    1: 'Dotnet',
    2: 'Npm',
  },
  formActions: {
    save: 'Speichern',
    cancel: 'Abbrechen',
  }
};
