import * as redux from 'redux'

export interface User {
  readonly id: string
  readonly name: string
}

export interface Statement {
  readonly text: string
  readonly user: User
  readonly createdAt: Date
}

export type Statements = ReadonlyArray<Statement>

export interface Dialogue {
  readonly id: string
  readonly title: string
  readonly statements: Statements
}

export interface DialogueSummary {
  readonly id: string
  readonly title: string
}

export type DialogueSummaries = ReadonlyArray<DialogueSummary>

export enum ModalType {
  LOGIN
}

export interface State {
  readonly activeModal?: ModalType
  readonly dialogue?: Dialogue
  readonly dialogueSummaries?: DialogueSummaries
  readonly draftStatement: string
}

export type Store = redux.Store<State>

export type HtmlElementEvent<T extends HTMLElement> = Event & {
  target: T
}

export type HtmlInputElementEvent = HtmlElementEvent<HTMLInputElement>

export enum ActionType {
  DIALOGUE_FETCH = 'DIALOGUE_FETCH',
  DIALOGUE_FETCH_SUCCESS = 'DIALOGUE_FETCH_SUCCESS',
  DIALOGUE_SUMMARIES_FETCH = 'DIALOGUE_SUMMARIES_FETCH',
  DIALOGUE_SUMMARIES_FETCH_SUCCESS = 'DIALOGUE_SUMMARIES_FETCH_SUCCESS',
  LOGIN_MODAL_SHOW = 'LOGIN_MODAL_SHOW',
  MODAL_HIDE = 'MODAL_HIDE',
  STATEMENT_ADD = 'STATEMENT_ADD',
  STATEMENT_UPDATE_DRAFT = 'STATEMENT_UPDATE_DRAFT',
  REDUX_INIT = '@@redux/INIT'
}

export interface DialogueFetchAction {
  readonly type: ActionType.DIALOGUE_FETCH
}

export interface DialogueFetchSuccessAction {
  readonly type: ActionType.DIALOGUE_FETCH_SUCCESS
  readonly payload: {
    readonly dialogue: Dialogue
  }
}

export interface DialogueSummariesFetchAction {
  readonly type: ActionType.DIALOGUE_SUMMARIES_FETCH
}

export interface DialogueSummariesFetchSuccessAction {
  readonly type: ActionType.DIALOGUE_SUMMARIES_FETCH_SUCCESS
  readonly payload: {
    readonly dialogueSummaries: DialogueSummaries
  }
}

export interface LoginModalShowAction {
  readonly type: ActionType.LOGIN_MODAL_SHOW
}

export interface ModalHideAction {
  readonly type: ActionType.MODAL_HIDE
}

export interface StatementAddAction {
  readonly type: ActionType.STATEMENT_ADD
}

export interface StatementUpdateDraftAction {
  readonly type: ActionType.STATEMENT_UPDATE_DRAFT
  readonly payload: {
    readonly text: string
  }
}

export interface ReduxInitAction {
  readonly type: ActionType.REDUX_INIT
}

export type Action =
  DialogueFetchAction |
  DialogueFetchSuccessAction |
  DialogueSummariesFetchAction |
  DialogueSummariesFetchSuccessAction |
  LoginModalShowAction |
  ModalHideAction |
  StatementUpdateDraftAction |
  StatementAddAction |
  ReduxInitAction
