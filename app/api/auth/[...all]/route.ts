import aj, {
  ArcjetDecision,
  shield,
  slidingWindow,
  validateEmail,
} from "@/lib/arcjet";
import ip from "@arcjet/ip";
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";
