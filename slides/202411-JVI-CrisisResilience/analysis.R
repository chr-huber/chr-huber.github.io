

library(pacman)
p_load(tidyverse)
p_load(colorspace)
p_load(tidyquant)


# SAMPLING ---------------------------------------------------------------------

sampling <- read.csv('../experiments_data/sampling_2022-11-13_sample.csv', sep = ";")

sampling %>% 
  group_by(
    subsession.round_number,
    participant.code
  ) %>%
  summarise(
    investment = mean(player.investment, na.rm=TRUE),
    risk = mean(player.risk, na.rm=TRUE),
    forecast = mean(player.fc, na.rm=TRUE)
  )

collapsed <- sampling %>% 
  group_by(
    subsession.round_number
  ) %>% 
  summarise(
    investment = mean(player.investment, na.rm=TRUE)
  )

ggplot() + 
  geom_line(
    aes(x = subsession.round_number, y = player.investment, color = participant.code),
    data = sampling
  ) + 
  geom_line(
    aes(x = subsession.round_number, y = investment),
    size = 1.4, color = "black",
    data = collapsed
  ) + 
  xlab("Round") + 
  ylab("Investment") + 
  theme_bw() + 
  theme(
    legend.position = "none"
  )






# UPDATING ---------------------------------------------------------------------

data <- read.csv('../experiments_software/otree_ch-tupdt-jvi/updt/static/updt/Data1.csv')

prices <- data %>% 
  filter(
    ID == 18
  ) %>% 
  select(
    Period,
    Price
  )

updating <- read.csv('../experiments_data/updt_2022-11-13_sample.csv', sep = ";")

investment <- updating %>% 
  group_by(
    subsession.round_number
  ) %>%
  summarise(
    investment = sum(player.investment, na.rm=TRUE),
    forecast = mean(player.forecast, na.rm=TRUE)
  ) %>% 
  rename(
    Period = subsession.round_number
  )

merge <-
  left_join(
    prices,
    investment,
    by = c("Period")
  ) %>% 
  pivot_longer(
    cols = Price:forecast
  )

ggplot() + 
  geom_col(
    aes(x = Period, y = value, fill = name),
    data = merge %>% filter(name == "investment")
  ) + 
  geom_line(
    aes(x = Period, y = value, color = name, linetype = name),
    data = merge %>% filter(name != "investment")
  ) + 
  theme_bw() + 
  theme(
    legend.position = "bottom"
  ) + 
  ylab("Price") + 
  scale_fill_discrete(name = "", labels = c("Investment")) + 
  scale_color_discrete(name = "", labels = c("Forecast", "Price")) + 
  scale_linetype_discrete(name = "", labels = c("Forecast", "Price"))



# ------------------------------------------------------------------------------
# LOOKUP BUBBLE EPISODES

nasdaq <- tq_get("^IXIC",
                 from = "1997-09-27",
                 to   = "2002-08-27")

sp500 <- tq_get("^GSPC",
                from = "2005-04-22",
                to   = "2010-03-27")

btc <- tq_get("BTC-USD",
              from = "2019-05-23",
              to = "2023-11-13")

tesla <- tq_get("TSLA",
                from = "2019-05-19",
                to = "2023-11-13")

moderna <- tq_get("MRNA",
                  from = "2019-02-21",
                  to = "2023-11-13")

nikkei <- tq_get("^N225",
                 from = "1987-07-13",
                 to = "1992-06-16")

sse <- tq_get("000001.SS",
              from = "2005-04-29",
              to = "2010-04-03")

wirecard <- tq_get("WDI.HM",
                   from = "2016-03-17",
                   to = "2021-02-21")

zoom <- tq_get("ZM",
               from = "2019-02-21",
               to = "2023-11-13")

merge <- 
  bind_rows(
    nasdaq,
    sse,
    nikkei,
    tesla,
    btc,
    wirecard,
    moderna,
    zoom
  ) %>%
  filter(
    !is.na(adjusted)
  ) %>% 
  group_by(
    symbol
  ) %>% 
  mutate(
    maxprice = max(adjusted),
    id = row_number(),
    firstprice = ifelse(id == 1, adjusted, NA),
    firstprice = mean(firstprice, na.rm=TRUE),
    t_maxprice = ifelse(adjusted == maxprice, date, NA),
    t = ifelse(!is.na(t_maxprice), 0, as.numeric(date - as.Date(max(t_maxprice, na.rm=TRUE)))),
    price = 100 * adjusted/maxprice
  )

merge$name = factor(merge$symbol, levels = c("^N225", "^IXIC", "000001.SS",  
                                             "WDI.HM", "BTC-USD", "TSLA", "MRNA", "ZM"),
                    labels = c("NIKKEI225 (Dec 1989)",
                               "NASDAQ (March 2000)",
                               "SSE Composite (Oct 2007)",
                               "Wirecard (Sep 2020)",
                               "Bitcoin (Nov 2021)",
                               "Tesla (Nov 2021)",
                               "Moderna (Aug 2021)",
                               "Zoom (Oct 2020)"))

save(merge, file = "merge.RData")

merge %>% 
  ggplot(aes(x = t, y = price, color = symbol)) + 
  geom_line() + 
  theme_bw()


