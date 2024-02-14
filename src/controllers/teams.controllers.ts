import { Request, Response, } from "express";
import { supabaseDb } from "../database/supabase";

export const getAllTeamsController = async (_req: Request, res: Response) => {
    try {
        const { rows } = await supabaseDb.query(`SELECT * FROM "Teams"`)

        return res.send(rows)
    } catch (error: any) {
        return res.send(error.message)
    }
}

export const getPlayersByTeamIdController = async (req: Request<{ teamId: string }>, res: Response) => {
    try {
        const { teamId } = req.params

        const { rows: players } = await supabaseDb.query(`select p.* from "PlayersTeamsHistory" pth right join "Players" p on p.id = pth.player_id where pth.team_id = ${teamId} and active = true`)

        return res.send(players)

    } catch (error: any) {
        return res.send(error.message)

    }
}