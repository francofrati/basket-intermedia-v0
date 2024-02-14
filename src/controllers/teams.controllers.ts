import { Request, Response, } from "express";
import { supabaseDb } from "../database/supabase";

export const getAllTeamsController = async (req: Request, res: Response) => {
    try {
        const { rows } = await supabaseDb.query(`SELECT * FROM "Teams"`)

        return res.send(rows)
    } catch (error: any) {
        return res.send(error.message)
    }
}