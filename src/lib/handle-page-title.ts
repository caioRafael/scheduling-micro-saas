const AppTitleObject = {
  app: {
    title: 'Inicio',
  },
  patients: {
    title: 'Pacientes',
  },
  profile: {
    title: 'Perfil',
  },
}

export function handlePageTitle(pathname: string) {
  const pageTitle = pathname.split('/').slice(1)

  if (pageTitle.length === 1) {
    return AppTitleObject[pageTitle[0] as keyof typeof AppTitleObject].title
  }

  return AppTitleObject[pageTitle[1] as keyof typeof AppTitleObject].title
}
