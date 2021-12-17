const getHeroImageUrl = (heroName, size) => {
    const basePath = 'http://cdn.dota2.com/apps/dota2/images/heroes/';
    const sizeOptions = {
        small: 'sb.png',
        medium: 'lg.png',
        large: 'full.png',
        vertical: 'vert.jpg'
    };
    const heroFixed = heroName.replace('npc_dota_hero_', '');

    return basePath + heroFixed + '_' + sizeOptions[size];
};

export default getHeroImageUrl;