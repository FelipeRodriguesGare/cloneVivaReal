export const amenites = (item) => {
    const parseToPortuguese = {
        PARTY_HALL: 'Salão de Festas',
        FURNISHED: 'Mobiliado',
        FIREPLACE: 'Lareira',
        POOL: 'Piscina',
        BARBECUE_GRILL: 'Churrasqueira',
        AIR_CONDITIONING: 'Ar Condicionado',
        ELEVATOR: 'Elevador',
        BICYCLES_PLACE: 'Bicicletário',
        GATED_COMMUNITY: 'Condomínio Fechado',
        PLAYGROUND: 'Playground',
        SPORTS_COURT: 'Área de Esportes',
        PETS_ALLOWED: 'Animais Permitidos',
        AMERICAN_KITCHEN: 'Cusinha Americana',
        TENNIS_COURT: 'Quadra de Tennis',
        LAUNDRY: 'Lavanderia',
        GYM: 'Academia',
        CINEMA: 'Cinema',
        SAUNA: 'Sauna',
        GARDEN: 'Jardim',
        ELECTRONIC_GATE: 'Portão Elétrico'
    } 
    return parseToPortuguese[item]
}