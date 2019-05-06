function set_chart(id, icon_class, title, description, cards) {
    const chart = document.getElementById("chart_" + id);
    chart.innerHTML = generate_chart(icon_class, title, description, cards);
}

function generate_chart(icon_class, title, description, cards) {
    return `
        <div class="chart">
          <div class="container-fluid">
            <div class="chart-header text-center">
              <i class="chart-icon ` + icon_class + ` text-primary"></i>
              <h3>` + title + `</h3>
              <p class="text-muted">` + description + `</p>
            </div>`
        + cards.map(generate_card).reduce((a, b) => a + b, "") +
        `
          </div>
        </div>`;
}

function generate_card(card, index) {
    const item_index_style = "item-" + (index + 1);
    return `
        <div class="chart-item `+ item_index_style + ` border rounded row">
          <div class="col-lg-3">
            <i class="fas fa-star"></i>
          </div>
          <div class="col-lg-9">
            <span>`
        + card +
        `
            </span>
          </div>
        </div>`;
}