import { Request, Response } from "express";
import { supabaseDb } from "../database/supabase";

export const getAllPlayersController = async (_req: Request, res: Response) => {
    try {
        const { rows: players } = await supabaseDb.query(`select p.*, t.short_name, t.team_logo_url,pth.team_id from "Players" p left join "PlayersTeamsHistory" pth on p.id = pth.player_id and pth.active = true left join "Teams" t on pth.team_id = t.id`)
        return res.send(players)
    } catch (error: any) {
        return res.status(500).send(error.message)
    }
}