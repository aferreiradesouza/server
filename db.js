module.exports = function () {
    const getData = (path, key) => {
        return require(path)[key]
    }

    return {
        graphsType: getData('./dashboard/dashboard.json', 'graphs'),
        saudeApi: getData('./graphs/saudeApi.json', 'saudeApi'),
        indisponibilidadeApi: getData('./graphs/indisponibilidadeApi.json', 'indisponibilidadeApi'),
        indisponibilidadeDominio: getData('./graphs/indisponibilidadeDominio.json', 'indisponibilidadeDominio'),
        indisponibilidadeEndpoint: getData('./graphs/indisponibilidadeEndpoint.json', 'indisponibilidadeEndpoint'),
        latenciaApi: getData('./graphs/latenciaApi.json', 'latenciaApi'),
        latenciaDominio: getData('./graphs/latenciaDominio.json', 'latenciaDominio'),
        latenciaEndpoint: getData('./graphs/latenciaEndpoint.json', 'latenciaEndpoint'),
        configuration: getData('./configuration/configuration.json', 'team'),
        dashboard: getData('./dashboard/dashboard.json', 'dashboard'),
        dashboardInfo: getData('./dashboard/dashboard.json', 'dashboardInfo'),
        tags: getData('./configuration/tags.json', 'tags'),
        endpoint: getData('./endpoint/endpoint.json', 'endpoint'),
        filtro: getData('./endpoint/filtro.json', 'filtro'),
        pendencia: getData('./endpoint/endpoint.json', 'pendencia'),
        ocorrencias: getData('./endpoint/ocorrencias.json', 'ocorrencias'),
        statusAlerta: getData('./endpoint/alertas.json', 'statusAlerta'),
        browsercheck: getData('./browser-check/browser-check-list.json', 'list'),
        infoResult: getData('./browser-check/info-result.json', 'infoResult'),
        receivingChannels: getData('./configuration/receiving-channels.json', 'receivingChannels'),
    }
}