
export const showStatus = (res,status,mess,succ,data = null) =>{
  return res.status(status).json({
        messsage:mess,
        success:succ,
        data
      })
}