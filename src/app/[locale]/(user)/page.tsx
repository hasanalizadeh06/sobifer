"use server"
import { redirect } from "next/navigation"

function page() {
  redirect('/1')
  return null
}

export default page