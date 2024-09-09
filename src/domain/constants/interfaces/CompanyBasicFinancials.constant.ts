export interface CompanyBasicFinancials {
  metric: Metric
  metricType: string
  series: Series
  symbol: string
}

export interface Metric {
  '10DayAverageTradingVolume': number
  '13WeekPriceReturnDaily': number
  '26WeekPriceReturnDaily': number
  '3MonthADReturnStd': number
  '3MonthAverageTradingVolume': number
  '52WeekHigh': number
  '52WeekHighDate': Date
  '52WeekLow': number
  '52WeekLowDate': Date
  '52WeekPriceReturnDaily': number
  '5DayPriceReturnDaily': number
  assetTurnoverAnnual: number
  assetTurnoverTTM: number
  beta: number
  bookValuePerShareAnnual: number
  bookValuePerShareQuarterly: number
  bookValueShareGrowth5Y: number
  capexCagr5Y: number
  cashFlowPerShareAnnual: number
  cashFlowPerShareQuarterly: number
  cashFlowPerShareTTM: number
  cashPerSharePerShareAnnual: number
  cashPerSharePerShareQuarterly: number
  currentDividendYieldTTM: number
  'currentEv/freeCashFlowAnnual': number
  'currentEv/freeCashFlowTTM': number
  currentRatioAnnual: number
  currentRatioQuarterly: number
  dividendGrowthRate5Y: number
  dividendPerShareAnnual: number
  dividendPerShareTTM: number
  dividendYieldIndicatedAnnual: number
  ebitdPerShareAnnual: number
  ebitdPerShareTTM: number
  ebitdaCagr5Y: number
  ebitdaInterimCagr5Y: number
  enterpriseValue: number
  epsAnnual: number
  epsBasicExclExtraItemsAnnual: number
  epsBasicExclExtraItemsTTM: number
  epsExclExtraItemsAnnual: number
  epsExclExtraItemsTTM: number
  epsGrowth3Y: number
  epsGrowth5Y: number
  epsGrowthQuarterlyYoy: number
  epsGrowthTTMYoy: number
  epsInclExtraItemsAnnual: number
  epsInclExtraItemsTTM: number
  epsNormalizedAnnual: number
  epsTTM: number
  focfCagr5Y: number
  grossMargin5Y: number
  grossMarginAnnual: number
  grossMarginTTM: number
  inventoryTurnoverAnnual: number
  inventoryTurnoverTTM: number
  'longTermDebt/equityAnnual': number
  'longTermDebt/equityQuarterly': number
  marketCapitalization: number
  monthToDatePriceReturnDaily: number
  netIncomeEmployeeAnnual: number
  netIncomeEmployeeTTM: number
  netInterestCoverageAnnual: number
  netInterestCoverageTTM: number
  netMarginGrowth5Y: number
  netProfitMargin5Y: number
  netProfitMarginAnnual: number
  netProfitMarginTTM: number
  operatingMargin5Y: number
  operatingMarginAnnual: number
  operatingMarginTTM: number
  payoutRatioAnnual: number
  payoutRatioTTM: number
  pbAnnual: number
  pbQuarterly: number
  pcfShareAnnual: number
  pcfShareTTM: number
  peAnnual: number
  peBasicExclExtraTTM: number
  peExclExtraAnnual: number
  peExclExtraTTM: number
  peInclExtraTTM: number
  peNormalizedAnnual: number
  peTTM: number
  pfcfShareAnnual: number
  pfcfShareTTM: number
  pretaxMargin5Y: number
  pretaxMarginAnnual: number
  pretaxMarginTTM: number
  'priceRelativeToS&P50013Week': number
  'priceRelativeToS&P50026Week': number
  'priceRelativeToS&P5004Week': number
  'priceRelativeToS&P50052Week': number
  'priceRelativeToS&P500Ytd': number
  psAnnual: number
  psTTM: number
  ptbvAnnual: number
  ptbvQuarterly: number
  quickRatioAnnual: number
  quickRatioQuarterly: number
  receivablesTurnoverAnnual: number
  receivablesTurnoverTTM: number
  revenueEmployeeAnnual: number
  revenueEmployeeTTM: number
  revenueGrowth3Y: number
  revenueGrowth5Y: number
  revenueGrowthQuarterlyYoy: number
  revenueGrowthTTMYoy: number
  revenuePerShareAnnual: number
  revenuePerShareTTM: number
  revenueShareGrowth5Y: number
  roa5Y: number
  roaRfy: number
  roaTTM: number
  roe5Y: number
  roeRfy: number
  roeTTM: number
  roi5Y: number
  roiAnnual: number
  roiTTM: number
  tangibleBookValuePerShareAnnual: number
  tangibleBookValuePerShareQuarterly: number
  tbvCagr5Y: number
  'totalDebt/totalEquityAnnual': number
  'totalDebt/totalEquityQuarterly': number
  yearToDatePriceReturnDaily: number
}

export interface Series {
  annual: { [key: string]: Annual[] }
  quarterly: { [key: string]: Annual[] }
}

export interface Annual {
  period: Date
  v: number | null
}
