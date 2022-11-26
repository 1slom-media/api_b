const GETNEWS = `
    select
        n.*
    from news as n
    where case when $1 > 0 then n.news_id = $1 else true end
    order by n.news_id
`;

const POSTNEWS =`
insert into
    news(
        image_news,news_title_uz,news_title_ru,news_title_en,news_description_uz,news_description_ru,news_description_en
    )
values
    ($1,$2,$3,$4,$5,$6,$7) returning *
`;

const PUTNEWS= `
    with old_news as (
        select
            news_id,
            image_news,
            news_title_uz,
            news_title_ru,
            news_title_en,
            news_description_uz,
            news_description_ru,
            news_description_en
        from news
        where news_id = $1    
    ) update news as n
        set
        image_news = 
                case 
                    when length($2) > 1 then $2
                    else o.image_news
                end,
        news_title_uz = 
                case 
                    when length($3) > 1 then $3
                    else o.news_title_uz
                end,
        news_title_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.news_title_ru
                end,
        news_title_en = 
                case 
                    when length($5) > 1 then $5
                    else o.news_title_en
                end,
        news_description_uz = 
                case 
                    when length($6) > 1 then $6
                    else o.news_description_uz
                end,
        news_description_ru = 
                case 
                    when length($7) > 1 then $7
                    else o.news_description_ru
                end,
        news_description_en = 
                case 
                    when length($8) > 1 then $8
                    else o.news_description_en
                end
    from old_news as o   
    where n.news_id = $1
    returning n.*                 
`;


const DELETENEWS = `
delete from news
where news_id=$1 returning *
`;

export{
    GETNEWS,
    POSTNEWS,
    PUTNEWS,
    DELETENEWS
}