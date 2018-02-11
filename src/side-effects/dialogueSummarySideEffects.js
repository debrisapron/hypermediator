import * as actions from '../actions'
import * as api from '../services/api'

export async function onFetchAll({ dispatch }) {
  let data = await api.fetchDialogueSummaries()
  dispatch(actions.dialogueSummary.fetchAllSuccess({ data }))
  return { data }
}
