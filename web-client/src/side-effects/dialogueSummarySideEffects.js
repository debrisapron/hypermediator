import * as actions from '../store/actions'
import * as api from '../services/api'

export async function onFetchAll({ dispatch }) {
  let dialogueSummaries = await api.fetchDialogueSummaries()
  dispatch(actions.dialogueSummary.fetchAllSuccess(dialogueSummaries))
}
