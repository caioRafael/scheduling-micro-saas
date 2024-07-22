'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { googleSignIn } from '../actions/signIn'

export function SignInContainer() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Realize seu login </CardTitle>
        {/* <CardDescription>Enter your credentials to access your account.</CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => googleSignIn()}
        >
          {/* <ChromeIcon className="mr-2 h-4 w-4" /> */}
          Entrar com Google
        </Button>
        {/* <Button variant="outline" className="w-full">
          Entrar com Facebook
        </Button>
        <Button variant="outline" className="w-full">
          Entrar com Twitter
        </Button> */}
      </CardContent>
      <CardFooter />
    </Card>
  )
}
