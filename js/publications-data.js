// Publications data for research.html
// Each entry: { id, year, title, titleUrl, authors, journalInfo, abstract, links, media (opt), authorNotes (opt) }
// links: [{ label, url }]  →  rendered as a.pub-tag (external) or abstract/media collapse toggle
// media: [{ text, url }]   →  rendered inside media collapse

window.PUBLICATIONS_DATA = {

    journalArticles: [
        {
            id: 'Huber2024REAM',
            title: 'Do experimental asset market results replicate? High-powered preregistered replications of 17 key results',
            titleUrl: 'https://doi.org/10.2139/ssrn.5048949',
            authors: 'Huber, C., Holzmeister, F., Johannesson, M., K\u00f6nig-Kersting, C., Dreber, A., Huber, J., Kirchler, M.',
            journalInfo: 'Journal of Finance, Forthcoming',
            abstract: 'Experimental asset markets provide a controlled approach to studying financial markets. We attempt to replicate 17 key results from four prominent studies, collecting new data from 166 markets with 1,544 participants. Only 3 of the 14 original results reported as statistically significant were successfully replicated. We fail to replicate findings on emotions, self-control, and gender differences in bubble formation but confirm that experience reduces bubbles and cognitive skills explain trading success. Our study demonstrates the importance of replications in enhancing the credibility of scientific results in this field.',
            links: [
                { label: 'preprint', url: 'https://doi.org/10.2139/ssrn.5048949' },
                { label: 'materials', url: 'https://osf.io/5ypku/' }
            ]
        },        
        {
            id: 'HuberRose2025',
            year: 2025,
            title: 'Presenting return charts in investment decisions',
            titleUrl: 'https://doi.org/10.1016/j.jbef.2025.101040',
            authors: 'Huber, C., Rose, J.',
            journalInfo: 'Journal of Behavioral and Experimental Finance, 46, 101040',
            abstract: "An investment\u2019s performance is often represented through charts, which are key components in making informed investment decisions but allow for discretion in how the information is presented. In a controlled, incentivized experiment that models an advisor\u2013client setting, we specifically study the discretion in the charts\u2019 vertical axis scale. Our findings reveal that advisors tend to present positive returns on a comparatively narrow scale \u2013 thereby enhancing the size of the return bars \u2013 while no distinct pattern is observed for negative returns. Advisors\u2019 scaling choices do not vary with different incentive schemes. For positive returns, chosen scales are positively related to advisors\u2019 forecasts. We therefore find no evidence that advisors use the chart\u2019s axis scale to visually emphasize or de-emphasize investment performance in a strategic manner. Additionally, investors\u2019 decisions and forecasts are not affected by different scales. This study extends the existing literature by exploring an interactive advisor\u2013client setting and contributes to our understanding of how return information is presented in investment decisions.",
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jbef.2025.101040' },
                { label: 'material', url: 'https://osf.io/r9mjs' }
            ]
        },
        {
            id: 'HuberKoenig2022',
            year: 2025,
            title: 'Experimenting with Financial Professionals',
            titleUrl: 'https://doi.org/10.1016/j.jbankfin.2024.107329',
            authors: 'Huber, C., K\u00f6nig-Kersting, C., Marini, M.M.',
            journalInfo: 'Journal of Banking & Finance, 170, 107329',
            abstract: 'As key players in financial markets and the broader industry, financial professionals are increasingly used as experimental research participants. We review over 50 studies comparing financial professionals to laypeople and conduct systematic meta-analyses of 22 eligible studies spanning from 1986 to 2023. Our findings reveal persistent and robust support for financial professionals being more risk- and uncertainty-loving, but little evidence of superior forecasting accuracy. Further analyses indicate that larger monetary payments result in greater behavioral differences between financial professionals and laypeople, suggesting an increased susceptibility to incentives among professionals. This systematic review not only synthesizes experimental results, contributing to recent discussions about external validity and generalizability, but also highlights critical methodological considerations when experimenting with financial professionals.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jbankfin.2024.107329' },
                { label: 'preprint', url: 'https://econpapers.repec.org/RePEc:inn:wpaper:2022-07' }
            ]
        },
        {
            id: 'Fullbrunn2023',
            year: 2024,
            title: 'Heterogeneity of Beliefs and Trading Behavior: A Reexamination',
            titleUrl: 'https://doi.org/10.1017/S002210902300011X',
            authors: 'F\u00fcllbrunn, S., Huber, C., Eckel, C., Weitzel, U.',
            journalInfo: 'Journal of Financial and Quantitative Analysis, 59(3), pp. 1337-1361',
            abstract: 'Combining experimental data sets from seven individual studies, including 255 asset markets with 2,031 participants, and 36,326 short-term price forecasts, we analyze the role of heterogeneity of beliefs in the organization of trading behavior by reproducing and reconsidering earlier experimental findings. Our results confirm prior evidence that price expectations affect trading behavior. However, heterogeneity in beliefs does not seem to drive overpricing and asset market bubbles, as suggested by earlier studies, and we find no indication of short-term beliefs being better determinants of trading behavior than longer-term beliefs.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1017/S002210902300011X' },
                { label: 'preprint', url: 'https://papers.ssrn.com/abstract=4141893' }
            ]
        },
        {
            id: 'Fisar2023',
            year: 2024,
            title: 'Reproducibility in Management Science',
            titleUrl: 'https://doi.org/10.1287/mnsc.2023.03556',
            authors: 'Fi\u0161ar, M., Greiner, B., Huber, C., Katok, E., Ozkes A. I., Management Science Reproducibility Collaboration',
            journalInfo: 'Management Science, 70(3), pp. 1343-1356',
            abstract: 'With the help of more than 700 reviewers, we assess the reproducibility of nearly 500 articles published in the journal Management Science before and after the introduction of a new Data and Code Disclosure policy in 2019. When considering only articles for which data accessibility and hardware and software requirements were not an obstacle for reviewers, the results of more than 95% of articles under the new disclosure policy could be fully or largely computationally reproduced. However, for 29% of articles, at least part of the data set was not accessible to the reviewer. Considering all articles in our sample reduces the share of reproduced articles to 68%. These figures represent a significant increase compared with the period before the introduction of the disclosure policy, where only 12% of articles voluntarily provided replication materials, of which 55% could be (largely) reproduced. Substantial heterogeneity in reproducibility rates across different fields is mainly driven by differences in data set accessibility. Other reasons for unsuccessful reproduction attempts include missing code, unresolvable code errors, weak or missing documentation, and software and hardware requirements and code complexity. Our findings highlight the importance of journal code and data disclosure policies and suggest potential avenues for enhancing their effectiveness.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1287/mnsc.2023.03556' },
                { label: 'preprint', url: 'https://doi.org/10.31219/osf.io/mydzv' }
            ],
            media: [
                { text: 'LSE Impact Blog', url: 'https://blogs.lse.ac.uk/impactofsocialsciences/2024/01/23/how-journal-communities-can-ensure-reproducible-social-science/' },
                { text: 'Management Science: From the Editor', url: 'https://www.informs.org/Blogs/ManSci-Blogs/From-the-Editor/Improving-Credibility-of-Scientific-Findings-Requires-Reproducibility-and-Replicability' },
                { text: 'Management Science Review', url: 'https://www.informs.org/Blogs/ManSci-Blogs/Management-Science-Review/A-Community-Effort-Towards-Reproducible-Management-Science' },
                { text: 'WU Vienna', url: 'https://www.wu.ac.at/en/research/research-portal/news/details-news/detail/default-5b27681db2/' }
            ]
        },
        {
            id: 'Huber2023JEBO',
            year: 2023,
            title: 'On Social Norms and Observability in (Dis)honest Behavior',
            titleUrl: 'https://doi.org/10.1016/j.jebo.2023.06.019',
            authors: 'Huber, C., Litsios, C., Nieper, A., Promann, T.',
            journalInfo: 'Journal of Economic Behavior & Organization, 212, pp. 1086-1099',
            abstract: 'Transparency and observability have been shown to foster ethical decision-making as people tend to comply with an underlying norm for honesty. However, in situations implying a social norm for dishonesty, this might be different. In a die-rolling experiment, we investigate whether observability can also have detrimental effects. We thus introduce a norm nudge toward honesty or dishonesty and make participants\u2019 decisions observable and open to the judgement of other participants in order to manipulate the observability of people\u2019s decisions as well as the underlying social norm. We find that a nudge toward honesty indeed increases the level of honesty, suggesting that such a norm nudge can successfully induce behavioral change. Our introduction of social image concerns via observability, however, does not affect honesty and does not interact with our norm nudge.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jebo.2023.06.019' },
                { label: 'preprint', url: 'https://doi.org/10.31219/osf.io/2nxv8' }
            ]
        },
        {
            id: 'Huber2023PNAS',
            year: 2023,
            title: 'Competition and moral behavior: A meta-analysis of forty-five crowd-sourced experimental designs',
            titleUrl: 'https://doi.org/10.1073/pnas.2215572120',
            authors: 'Huber, C., Dreber, A., Huber, J., Johannesson, M., Kirchler, M., Weitzel, U., ..., Holzmeister, F.',
            journalInfo: 'Proceedings of the National Academy of Sciences, 120(23)',
            abstract: 'Does competition affect moral behavior? This fundamental question has been debated among leading scholars for centuries, and more recently, it has been tested in experimental studies yielding a body of rather inconclusive empirical evidence. A potential source of ambivalent empirical results on the same hypothesis is design heterogeneity\u2014variation in true effect sizes across various reasonable experimental research protocols. To provide further evidence on whether competition affects moral behavior and to examine whether the generalizability of a single experimental study is jeopardized by design heterogeneity, we invited independent research teams to contribute experimental designs to a crowd-sourced project. In a large-scale online data collection, 18,123 experimental participants were randomly allocated to 45 randomly selected experimental designs out of 95 submitted designs. We find a small adverse effect of competition on moral behavior in a meta-analysis of the pooled data. The crowd-sourced design of our study allows for a clean identification and estimation of the variation in effect sizes above and beyond what could be expected due to sampling variance. We find substantial design heterogeneity\u2014estimated to be about 1.6 times as large as the average standard error of effect size estimates of the 45 research designs\u2014indicating that the informativeness and generalizability of results based on a single experimental design are limited. Drawing strong conclusions about the underlying hypotheses in the presence of substantive design heterogeneity requires moving toward much larger data collections on various experimental designs testing the same hypothesis.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1073/pnas.2215572120' },
                { label: 'material', url: 'https://osf.io/r6anc/' },
                { label: 'project overview', url: 'https://manydesigns.pages.dev'}
            ],
            media: [
                { text: 'Psychology Today', url: 'https://www.psychologytoday.com/us/blog/the-social-consumer/202305/does-competition-corrupt-us' },
                { text: 'The Conversation', url: 'https://theconversation.com/does-competition-make-us-less-moral-new-research-says-yes-but-only-a-little-bit-207026' },
                { text: 'Cornell University ILR School', url: 'https://www.ilr.cornell.edu/news/research/competition-clouds-morality-multi-pronged-study-finds' },
                { text: 'University of Innsbruck', url: 'https://www.uibk.ac.at/en/newsroom/2023/morality-and-competition-in-science/' },
                { text: 'Spektrum.de (German)', url: 'https://www.spektrum.de/news/prosozialitaet-markt-und-moral/2191710' },
                { text: 'APA Austria Presse Agentur (German)', url: 'https://science.apa.at/power-search/1153702243794019550' },
                { text: 'Frankfurter Allgemeine Sonntagszeitung (German)', url: 'https://zeitung.faz.net/fas/wirtschaft/2023-06-04/der-markt-und-die-moral/900275.html' }
            ]
        },
        {
            id: 'Huber2023JBEF',
            year: 2023,
            title: 'Experiments in Finance: A Survey of Historical Trends',
            titleUrl: 'https://doi.org/10.1016/j.jbef.2022.100737',
            authors: 'Huber, C., Kirchler, M.',
            journalInfo: 'Journal of Behavioral and Experimental Finance, 37, 100737',
            abstract: 'Experiments complement other methods in identifying causal relationships and measuring behavioral deviations from theoretical predictions. While the experimental method has long been central in many scientific disciplines, it was almost nonexistent in finance until the 1980s. To survey the development of experiments in finance, we compiled a comprehensive account of experimental studies published in the Journal of Finance, Journal of Financial Economics, Review of Financial Studies, Review of Finance, Journal of Quantitative and Financial Analysis, and Journal of Banking and Finance, and experimental finance studies published in the top 5 journals in economics. With this novel dataset, we identified historical trends in experimental finance. Since the first experiments were published in finance journals in the 1980s, especially in the last 20 years, the share of experimental publications in these journals has markedly increased. In this article, we report trends toward descriptive, individual decision, and field experiments.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jbef.2022.100737' },
                { label: 'material', url: 'https://osf.io/cn3av/' }
            ]
        },
        {
            id: 'Huber2022JEBO',
            year: 2022,
            title: 'Volatility shocks and investment behavior',
            titleUrl: 'https://doi.org/10.1016/j.jebo.2021.12.007',
            authors: 'Huber, C., Huber, J., Kirchler, M.',
            journalInfo: 'Journal of Economic Behavior & Organization, 194, pp. 56-70',
            abstract: 'We investigate how volatility shocks affect investors risk-taking, risk perception and forecasts. We run artefactual field experiments with two participant pools (finance professionals and students), differing in (i) the direction of the shock (down, up, or a neutral case) and (ii) the presentation format of the time series (prices or returns). Professionals investments are negatively associated with the price change and performance of the stock and their perceived risk increases to a similar extent following shocks of all directions. Students risk perception, in contrast, is more closely related to the frequency of negative returns rather than an increase in volatility.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jebo.2021.12.007' },
                { label: 'material', url: 'https://osf.io/9chg8/' },
                { label: 'talk', url: 'https://youtu.be/YjDQvcitgyw' }
            ]
        },
        {
            id: 'Huber2021JBF',
            year: 2021,
            title: 'Market shocks and professionals\u2019 investment behavior \u2014 Evidence from the COVID-19 crash',
            titleUrl: 'https://doi.org/10.1016/j.jbankfin.2021.106247',
            authors: 'Huber, C., Huber, J., Kirchler, M.',
            journalInfo: 'Journal of Banking & Finance, 133, 106247',
            abstract: 'We investigate how the experience of extreme events, such as the COVID-19 market crash, influence risk-taking behavior. To isolate changes in risk-taking from other factors, we ran controlled experiments with finance professionals in December 2019 and March 2020. We observe that their investments in the experiment were 12 percent lower in March 2020 than in December 2019, although their price expectations had not changed, and although they considered the experimental asset less risky during the crash than before. This lower perceived risk is likely due to adaptive normalization, as volatility during the shock is compared to volatility experienced in real markets (which was low in December 2019, but very high in March 2020). Lower investments during the crash can be supported by higher risk aversion, not by changes in beliefs.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jbankfin.2021.106247' },
                { label: 'material', url: 'https://osf.io/9chg8/' },
                { label: 'talk', url: 'https://youtu.be/pfJefgCvSTc' }
            ]
        },
        {
            id: 'Huber2020JEBO',
            year: 2020,
            title: 'Bad bankers no more? Truth-telling and (dis)honesty in the finance industry',
            titleUrl: 'https://doi.org/10.1016/j.jebo.2020.10.020',
            authors: 'Huber, C., Huber, J.',
            journalInfo: 'Journal of Economic Behavior & Organization, 180, pp. 472-493',
            abstract: 'Worries about unethical behavior are a recurring issue in the finance industry, which has inspired a number of recent studies. We contribute to this ongoing discussion by investigating preferences for truthfulness within the finance industry in a controlled experiment with 415 financial professionals (and 270 students as a control group). Participants have to report one of two numbers, of which one is true, the other false, where truth-telling is costly. In three main treatments we vary the situational context of subjects\u2019 decisions (abstract, neutral, finance context) by applying differently framed instructions. We find that contexts matter for financial professionals: they act more honestly in a financial context and a neutral context than in an abstract situation, while for a control group we find no such differences. Further variations on the financial decision situation do not affect financial professionals\u2019 honesty.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jebo.2020.10.020' },
                { label: 'material', url: 'https://osf.io/c9dbj/' }
            ],
            media: [
                { text: 'ORF.at (German)', url: 'https://science.orf.at/stories/3219553/' },
                { text: 'APA Austria Presse Agentur (German)', url: 'https://science.apa.at/power-search/1153702243794019550' }
            ]
        },
        {
            id: 'Weitzel2020',
            year: 2020,
            title: 'Bubbles and financial professionals',
            titleUrl: 'https://doi.org/10.1093/rfs/hhz093',
            authors: 'Weitzel, U., Huber, C., Huber, J., Kirchler, M., Lindner, F., Rose, J.',
            journalInfo: 'Review of Financial Studies, 33(6), pp. 2659\u20132696',
            abstract: 'The efficiency of financial markets and their potential to produce bubbles are central topics in academic and professional debates. Yet, little is known about the contribution of financial professionals to price efficiency. We run 116 experimental markets with 412 professionals and 502 students. We find that professional markets with bubble drivers \u2013 capital inflows or high initial capital supply \u2013 are susceptible to bubbles, although they are more efficient than student markets. In mixed markets with students, bubbles also occur, but professionals act as price stabilizers. We show that heterogeneous price beliefs drive overpricing, especially in bubble-prone market environments.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1093/rfs/hhz093' },
                { label: 'material', url: 'https://osf.io/265dp/' }
            ]
        },
        {
            id: 'Huber2019JESA',
            year: 2019,
            title: 'Design-features of bubble-prone experimental asset markets with a constant FV',
            titleUrl: 'https://link.springer.com/article/10.1007%2Fs40881-019-00061-5',
            authors: 'Huber, C., Bindra, P.C., Kleinlercher, D.',
            journalInfo: 'Journal of the Economic Science Association, 5(2), pp. 197-209',
            abstract: 'Experimental asset markets with a constant fundamental value (FV) have grown in importance in recent years. A methodological examination of the robustness of experimental results in such a setting which has been shown to produce bubbles, however, is lacking. In a laboratory experiment with 280 subjects, we investigate whether specific design features are sufficient to influence experimental results. In detail, we (1) vary the visual representation of the price chart, and (2) provide subjects with full information about the FV process. We find overvaluation and bubble formation to be reduced when trading prices are displayed at the upper end of the price chart. Surprisingly, we do not find any effects when subjects have full information about the FV process.',
            links: [
                { label: 'article', url: 'https://link.springer.com/article/10.1007%2Fs40881-019-00061-5' },
                { label: 'material', url: 'https://osf.io/y5pmd/' }
            ]
        },
        {
            id: 'Huber2019JBF',
            year: 2019,
            title: 'The effect of experts\u2019 and laypeople\u2019s forecasts on others\u2019 stock market forecasts',
            titleUrl: 'https://doi.org/10.1016/j.jbankfin.2019.105662',
            authors: 'Huber, C., Huber, J., Hueber, L.',
            journalInfo: 'Journal of Banking & Finance, 109, 105662',
            abstract: 'With a large-scale online experiment with 1593 participants from the U.S. and the U.K. we explore whether and how people working in the finance industry and laypeople from the general population are influenced by information on other people\u2019s forecasts when making forecasts on the future development of two indices and two stocks. We find that (i) laypeople\u2019s forecasts are strongly influenced by information they get on other subjects\u2019 forecasts, while financial professionals are much less influenced by information signals; (ii) signals by financial professionals influence all subject groups more than forecasts by laypeople; (iii) we observe a home bias in all subject groups, which can be mitigated by information signals; (iv) all subject groups expect lower forecast errors for financial professionals than for laypeople, hence we find evidence for trust in experts.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1016/j.jbankfin.2019.105662' },
                { label: 'preprint', url: 'https://doi.org/10.31219/osf.io/57m6g' }
            ]
        },
        {
            id: 'Huber2019JBEF',
            year: 2019,
            title: 'oTree: The bubble game',
            titleUrl: 'https://www.sciencedirect.com/science/article/pii/S2214635018301928',
            authors: 'Huber, C.',
            journalInfo: 'Journal of Behavioral and Experimental Finance, 22, pp. 3-6',
            abstract: 'Bubbles and speculative behavior have been documented in real-world and experimental asset markets alike. Moinas and Pouget (2013) introduce the bubble game representing a sequential market with both bubble and no-bubble equilibria, in which speculative behavior can be analyzed using concepts from game theory. This article presents a ready-to-use software application for oTree (Chen et al., 2016) which allows to easily conduct the game in various settings within a modern web-programming framework. Researchers can adapt the game to their needs in a straightforward way by modifying thoroughly-documented variables in a single file. The software module supports responsive graphical designs and is prepared for multilingual use on any device with a web browser, allowing the implementation in the field, the laboratory, the classroom, or online.',
            links: [
                { label: 'article', url: 'https://www.sciencedirect.com/science/article/pii/S2214635018301928' },
                { label: 'download', url: 'downloads.html' }
            ]
        },
        {
            id: 'Huber2019EE',
            year: 2019,
            title: 'Scale matters: Risk perception, return expectations, and investment propensity under different scalings',
            titleUrl: 'https://link.springer.com/article/10.1007/s10683-018-09598-4',
            authors: 'Huber, C., Huber, J.',
            journalInfo: 'Experimental Economics, 22(1), pp. 76-100',
            abstract: 'With a novel experimental design we investigate whether risk perception, return expectations, and investment propensity are influenced by the scale of the vertical axis in charts. We explore this for two presentation formats, namely return charts and price charts, where we depict low- and high-volatility assets with distinct trends. We find that varying the scale strongly affects people\u2019s risk perception, as a narrower scale of the vertical axis leads to significantly higher perceived riskiness of an asset even if the underlying volatility is the same. Furthermore, past returns predict future return expectations almost perfectly. In our setting perceived profitability was considered more important than perceived riskiness when making investment choices. Overall we show that adapting the scale of a chart makes it easier to recognize yearly return variations within a single security, but at the same time makes it harder to identify differences between dissimilar securities. This is something regulators should be aware of and take into account in the rules they set.',
            links: [
                { label: 'article', url: 'https://link.springer.com/article/10.1007/s10683-018-09598-4' },
                { label: 'material', url: 'https://osf.io/avfhe/' }
            ]
        }
    ],

    bookChapters: [
        {
            id: 'Fullbrunn2022ch',
            year: 2022,
            title: 'Experimental Finance and Financial Professionals',
            titleUrl: 'https://doi.org/10.4337/9781800372337.00012',
            authors: 'F\u00fcllbrunn, S., Huber, C., K\u00f6nig-Kersting, C.',
            journalInfo: 'In F\u00fcllbrunn S. & Haruvy, E. (Eds.), <i>Handbook of Experimental Finance</i> (pp. 64\u201372). Edward Elgar Publishing',
            links: [
                { label: 'chapter', url: 'https://doi.org/10.4337/9781800372337.00012' },
                { label: 'preprint', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3975949' }
            ]
        },
        {
            id: 'Holzmeister2022ch',
            year: 2022,
            title: 'A Critical Perspective on the Conceptualization of Risk in Behavioral and Experimental Finance',
            titleUrl: 'https://doi.org/10.4337/9781800372337.00037',
            authors: 'Holzmeister, F., Huber, C., Palan, S.',
            journalInfo: 'In F\u00fcllbrunn S. & Haruvy, E. (Eds.), <i>Handbook of Experimental Finance</i> (pp. 408\u2013413). Edward Elgar Publishing',
            links: [
                { label: 'chapter', url: 'https://doi.org/10.4337/9781800372337.00037' },
                { label: 'preprint', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3816460' }
            ]
        }
    ],

    crowdScience: [
        {
            id: 'Huber2026',
            year: 'Working Paper',
            title: 'Collective Evidence on Behavioral Interventions Targeting Carbon Pricing Support: A Many-Designs Approach with 55 Studies',
            titleUrl: 'https://doi.org/10.21203/rs.3.rs-8797610/v1',
            authors: 'Huber, J., Holzknecht, A., Schwaiger, R., ... Huber, C., ... Zhao, X.',
            authorNotes: ['Contributing one out of 55 study designs'],
            journalInfo: '',
            abstract: "There is an urgent need to reduce carbon emissions globally to limit the damages caused by climate change. Most economists agree that a carbon price is an effective and cost-efficient policy to mitigate emissions, yet low public acceptance and limited political support remain major barriers to its widespread implementation. This crowdsourced 'many-designs' project presents results from 55 behavioral interventions on real-world support for carbon pricing, independently developed by international research teams randomly selected from an initial pool of 135 applications. By implementing the interventions simultaneously with almost 20,000 U.S. residents, this pre-registered study ensures the comparability of results, accelerates scientific knowledge generation, and reduces the risk of scientific malpractices. The results show very small positive but statistically significant effects of behavioral interventions on real-world support, and stated support, including the willingness to endorse a carbon price that internalizes the social costs of $120 per ton of CO2 emissions (Cohen's d's: 0.04-0.08). Put differently, this entails an increase in support for carbon pricing across measures of around two percentage points. Furthermore, the results reveal low-to-medium between-study heterogeneity (τ: 0.07-0.12, I^2: 32%-57%). Lastly, we identify strong overconfidence among research teams regarding the expected effects of their interventions and those of their peers, indicating a potential miscalibration of community expectations.",
            links: [
                { label: 'preprint', url: 'https://doi.org/10.21203/rs.3.rs-8797610/v1' },
                { label: 'project overview', url: 'https://manydesignscarbon.online/'}
            ]
        },                                
        {
            id: 'Brodeur2026',
            year: 2026,
            title: 'Reproducibility and robustness of economics and political science research',
            titleUrl: 'https://doi.org/10.1038/s41586-026-10251-x',
            authors: 'Brodeur, A., Mikola, D., Cook, N., ... Huber, C., ... Zhong, Y.',
            authorNotes: ['Local organizer of Replication Games', 'Author of a replication report'],
            journalInfo: 'Nature, 652, pp. 151–156',
            abstract: 'Science aspires to be cumulative. Reproducibility efforts strengthen science by testing the reliability of published findings, promoting self-correction, and informing policy-making. Computational reproductions, whereby independent researchers reproduce the results of published studies, are an essential diagnostic tool. Such efforts should have greater visibility. However, little social science reproduction and robustness has been conducted at scale. Here we reproduced original analyses and conducted robustness checks of 110 articles that were published in leading economics and political science journals with mandatory data and code sharing policies. We found that more than 85% of published claims were computationally reproducible. In robustness checks, our reanalyses showed that 72% of statistically significant estimates remain significant and in the same direction, and the median reproduced effect size is nearly the same as the originally published effect size (that is, 99% of the published effect size). Additionally, 6 independent research teams examined 12 pre-specified hypotheses about determinants of robustness. Research teams with more experience found lower levels of robustness, and robustness did not correlate with author characteristics or data availability.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1038/s41586-026-10251-x' },
                { label: 'preprint', url: 'https://ideas.repec.org/p/zbw/i4rdps/287.html' }
            ]
        },        
        {
            id: 'Aczel2026',
            year: 2026,
            title: 'Investigating the analytical robustness of the social and behavioural sciences',
            titleUrl: 'https://doi.org/10.1038/s41586-025-09844-9',
            authors: 'Aczel, B., Szaszi, B., Clelland, H., ... Huber, C., ... Nosek, B.',
            authorNotes: ['Reanalysis of one out of 100 studies'],
            journalInfo: 'Nature, 652, pp. 135–142',
            abstract: 'The same dataset can be analysed in different justifiable ways to answer the same research question, potentially challenging the robustness of empirical science. In this crowd initiative, we investigated the degree to which research findings in the social and behavioural sciences are contingent on analysts’ choices. We examined a stratified random sample of 100 studies published between 2009 and 2018, in which, for one claim per study, at least five reanalysts independently reanalysed the original data. The statistical appropriateness of the reanalyses was assessed in peer evaluations, and the robustness indicators were inspected along a range of research characteristics and study designs. We found that 34% of the independent reanalyses yielded the same result (within a tolerance region of ±0.05 Cohen’s d) as the original report; with a four times broader tolerance region, this indicator increased to 57%. Of the reanalyses conducted, 74% reached the same conclusion as the original investigation, 24% yielded no effects or inconclusive results and 2% reported the opposite effect. This exploratory study indicates that the common single-path analyses in social and behavioural research should not be simply assumed to be robust to alternative analyses4. Therefore, we recommend the development and use of practices to explore and communicate this neglected source of uncertainty.',
            links: [
                { label: 'article', url: 'https://doi.org/10.1038/s41586-025-09844-9' },
                { label: 'preprint', url: 'https://doi.org/10.31222/osf.io/twqsv_v1' }
            ],
            media: [
                { text: 'Science', url: 'https://www.science.org/content/article/across-social-sciences-half-research-doesn-t-replicate' },
                { text: 'New York Times', url: 'https://www.nytimes.com/2026/04/01/science/ai-experiments-replication.html' },
                { text: 'Aalto University', url: 'https://www.aalto.fi/en/news/scientific-conclusions-depend-on-who-performs-the-analysis' },
                { text: 'ORF.at (German)', url: 'https://science.orf.at/stories/3234910/' },
                { text: 'Die Zeit (German)', url: 'https://www.zeit.de/gesundheit/2026-04/wissenschaftliche-studien-forschung-vertrauen-brian-nosek' }
            ]            
        },
    ],

    workingPapers: [
        {
            id: 'Blackburn2022',
            title: 'Cooperation among an anonymous group protected Bitcoin during failures of decentralization',
            titleUrl: 'https://doi.org/10.48550/arXiv.2206.02871',
            authors: '(with A. Blackburn, Y. Eliaz, M.S. Shamim, D. Weisz, G. Seshadri, K. Kim, S. Hang, E. Lieberman Aiden)',
            abstract: 'Bitcoin is a digital currency designed to rely on a decentralized, trustless network of anonymous agents. Using a pseudonymous-address-linking procedure that achieves >99% sensitivity and >99% specificity, we reveal that between launch (January 3rd, 2009), and when the price reached $1 (February 9th, 2011), most bitcoin was mined by only sixty-four agents. This was due to the rapid emergence of Pareto distributions in bitcoin income, producing such extensive resource centralization that almost all contemporary bitcoin addresses can be connected to these top agents by a chain of six transactions. Centralization created a social dilemma. Attackers could routinely exploit bitcoin via a "51% attack", making it possible for them to repeatedly spend the same bitcoins. Yet doing so would harm the community. Strikingly, we find that potential attackers always chose to cooperate instead. We model this dilemma using an N-player Centipede game in which anonymous players can choose to exploit, and thereby undermine, an appreciating good. Combining theory and economic experiments, we show that, even when individual payoffs are unchanged, cooperation is more frequent when the game is played by an anonymous group. Although bitcoin was designed to rely on a decentralized, trustless network of anonymous agents, its early success rested instead on cooperation among a small group of altruistic founders.',
            links: [
                { label: 'preprint', url: 'https://doi.org/10.48550/arXiv.2206.02871' }
            ],
            media: [
                { text: 'New York Times', url: 'https://www.nytimes.com/2022/06/06/science/bitcoin-nakamoto-blackburn-crypto.html' },
                { text: 'Coindesk', url: 'https://www.coindesk.com/layer2/2022/06/07/new-research-unearths-insights-into-satoshi-and-bitcoins-early-days/' },
                { text: 'ORF.at (German)', url: 'https://science.orf.at/stories/3213526/' }
            ]
        },
        {
            id: 'HuberRose2019',
            title: 'Individual Attitudes and Market Dynamics Towards Imprecision',
            titleUrl: 'https://econpapers.repec.org/RePEc:inn:wpaper:2019-06',
            authors: '(with J. Rose; inactive working paper)',
            abstract: 'In situations where both the magnitude of gains and losses as well as the probability distribution over these realizations is uncertain, imprecision is an inherent feature of decision-making. While imprecision has been shown to affect individual valuations, many decisions are made in market settings with potentially different implications. We thus examine the impact of imprecision, first, in an individual decision task, and second, in experimental asset markets-with no imprecision (risk), imprecision in probabilities (ambiguity), imprecision in outcomes, and full imprecision. We find imprecision seeking in outcomes in people\u2019s individual attitudes, but these preferences do not withstand market dynamics. Nevertheless, we observe imprecision aversion in probabilities at the end of trading, suggesting that ambiguity aversion, in contrast, prevails in experimental markets.',
            links: [
                { label: 'preprint', url: 'https://econpapers.repec.org/RePEc:inn:wpaper:2019-06' }
            ]
        }
    ],

    workInProgress: [
        { title: 'Global Individual Investor Financial Beliefs and Preferences Survey' },
        { title: 'Competitiveness and Speculative Behavior' },
        {
            title: 'Management Science Reproducibility Project',
            titleUrl: 'https://pubsonline.informs.org/doi/full/10.1287/mnsc.2022.4644#_i25',
            authors: '(with M. Fi\u0161ar, B. Greiner, E. Katok, and A. Ozkes)'
        }
    ]
};
