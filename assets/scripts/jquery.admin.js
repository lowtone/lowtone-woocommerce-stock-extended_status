// Generated by CoffeeScript 1.5.0
(function() {
  var $;

  $ = jQuery;

  $(function() {
    return $('#woocommerce-product-data').each(function() {
      var $availability_input, $extended_status, $product_data, $show_if_expected, $show_if_outofstock, $stock_status_input, toggle_show_if_expected, toggle_show_if_outofstock;
      $product_data = $(this);
      $extended_status = $product_data.find('.lowtone.woocommerce.stock.extended_status');
      $extended_status.insertAfter($product_data.find('._backorders_field').parent());
      $stock_status_input = $product_data.find('select[name="_stock_status"]');
      $show_if_outofstock = $product_data.find('.show_if_outofstock');
      toggle_show_if_outofstock = function() {
        return $show_if_outofstock.toggle('outofstock' === $stock_status_input.val());
      };
      toggle_show_if_outofstock();
      $stock_status_input.change(toggle_show_if_outofstock);
      $availability_input = $product_data.find('select[name="_lowtone_woocommerce_stock_extended_status_availability"]');
      $show_if_expected = $product_data.find('.show_if_expected');
      toggle_show_if_expected = function() {
        return $show_if_expected.toggle('expected' === $availability_input.val());
      };
      toggle_show_if_expected();
      return $availability_input.change(toggle_show_if_expected);
    });
  });

}).call(this);
