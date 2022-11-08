$(window).ready(function() {
    //--- VAR
    var theResult = [
        '', // Application - set when slide two builds based on selected application
        '', // Voltage - set on swatch select based on the selected voltage
        '', // BTUs - set on swatch select based on selected BTU
        '', // Part Number - selected from data obj using application + btu + volatge
        '', // Shopify variant - selected from data obj using application + btu + volatge
        '', // Shopify price - set when slide two builds based on selected model.
    ]
    var theResultIndex = ["",""]; // Used to calculate the recommended model based on selected options.
    var triggerBtn = $('.js-soft-starter-selector');
    var theModal = $('#js-modal-wrapper');
    var theModalBackground = $('#js-modal-background');
    var closeModalBtn = $('#js-close-modal');
    var items = $('.item');
    var selectedGroup = '';
    var selectedModel = '';
    var stepOne = $('#js-modal-step-1');
    var stepTwo = $('#js-modal-step-2');
    var stepResults = $('#js-modal-step-results');
    var resultsBtn = $('#js-results-btn');
    var errorNotice = $('#js-error-notice');
    var backBtn = $('.js-back-button');
    var cartBtn = $('#js-add-to-cart');
    var outOfStock = $('#js-out-of-stock');
    var validVoltage = [false,false];
    var validBTU = [false,false];
    var fadeTime = 250;

    //--- FUNCTIONS
    function openModal() {
        theModalBackground.fadeIn(250);
        theModal.fadeIn(fadeTime);
    }

    function closeModal() {
        theModalBackground.fadeOut(fadeTime)
        theModal.fadeOut(fadeTime);
        setTimeout(reset,fadeTime);
    }

    function selectItem(e) {
        e.preventDefault();
        selectedGroup = $(this).data('group');
        selectedModel = $(this).data('item');
        theResult[0] = [selectedGroup,selectedModel];

        // Call slide two and pass in selected model
        slideTwo(selectedGroup,selectedModel);

        // Animate window back to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function slideTwo(group,model) {
        theItem = softStarterSelector.products[group][model];

        // Set step 2 model info
        stepTwo.find('#js-model-image').attr('src',theItem.typeImage);
        stepTwo.find('#js-model-title').html(theItem.typeTitle);
        stepTwo.find('#js-model-description').html(theItem.typeDescription);

        // Setup step 2 Voltage options
        var theVoltages = theItem.voltage;
        if (theVoltages.length > 0) {
            
            // Tell validation to check for color
            validVoltage[0] = true;
            
            stepTwo.find('#js-voltage-options').removeClass('hidden');
            
            for (var i = 0; i < theVoltages.length; i++) {
                var theVoltage = '\
                    <div class="volt js-voltage" data-voltage="' + theVoltages[i].volts +'">\
                        <div class="swatch volt-swatch volt-' + theVoltages[i].volts + '">\
                            <div class="checkmark">\
                                <img src="' + "images/checkmark.svg" +'" alt="checkmark">\
                            </div>\
                        </div>\
                        <p>' + theVoltages[i].label + '</p>\
                    </div>';
                stepTwo.find('#js-voltage').append(theVoltage);
            }
        } else {
            theResult[2] = null;
        }

        // Close step 1 and open step 2
        stepOne.addClass('hidden');
        stepTwo.removeClass('hidden');
    }       

        function setVoltage() {
                
            // Validate voltage
            validVoltage[1] = true;
            $('.error-color').remove();

            $('.voltage .swatch').removeClass('selected');
            $(this).find('.swatch').addClass('selected');

            // Set results voltage
            theResult[1] = $(this).data('voltage');

            // Setup BTU options
            stepTwo.find('#js-btu-options').addClass('hidden');
            stepTwo.find('#js-btus').html('');
            setupBTU(theResult[1]);
        }

        function setupBTU(selectedVoltage) { 

            // Setup step 2 BTU options
            var theBTUs = theItem.btus;
            if (theBTUs.length > 0) {
                
                // Tell validation to check for color
                validBTU[0] = true;
                
                stepTwo.find('#js-btu-options').removeClass('hidden');
                
                for (var i = 0; i < theBTUs.length; i++) {
                    // Check if this works with the selected voltage
                    if (theBTUs[i].voltage.includes(selectedVoltage)) {
                        var theBTU = '\
                        <div class="btu js-btu" data-btu="' + theBTUs[i].btu +'">\
                            <div class="swatch btu-swatch btu-' + theBTUs[i].btu + '">\
                                <div class="checkmark">\
                                    <img src="' + "images/checkmark.svg" +'" alt="checkmark">\
                                </div>\
                            </div>\
                            <p>' + theBTUs[i].label + '</p>\
                        </div>';
                        stepTwo.find('#js-btus').append(theBTU);
                    }
                }
            } else {
                theResult[1] = null;
            }
        }

        function setBTU() {
            
            // Validate color
            validBTU[1] = true;
            $('.error-color').remove();

            $('.btus .swatch').removeClass('selected');
            $(this).find('.swatch').addClass('selected');

            // Set results color
            theResult[2] = $(this).data('btu');
        }

        function checkValidation() {
            // Clear existing errors before checking again
            errorNotice.html('');

            var validationPassed = [false, false];
            
            // validate voltage
            if (validVoltage[0] === true) {
                validationPassed[0] = validVoltage[1];
            } else {
                validationPassed[0] = null;
            }
            
            // validate BTU
            if (validBTU[0] === true) {
                validationPassed[1] = validBTU[1];
            } else {
                validationPassed[1] = null;
            }

            // Approve or return error message
            if (validationPassed[0] != false && validationPassed[1] != false && validationPassed[2] != false ) {
                slideResults();
            } else {
                // Volt missing
                if (validationPassed[1] === false) {
                    errorNotice.append('<li class="error-message error-color">No voltage was selected. Please select a voltage.</li>');
                }

                // BTU missing
                if (validationPassed[0] === false) {
                    errorNotice.append('<li class="error-message error-color">No BTU range was selected. Please select a BTU range.</li>');
                }
            }
        }

    function slideResults() {
        var resultModel = ''; // concatonate this way because strings are stored in theResults array
        resultModel += theResult[1];
        resultModel += theResult[2];

        // Set the recommended product and shopify variant
        theResult[3] = softStarterSelector.products[selectedGroup][selectedModel].resultModels[resultModel].part;
        theResult[4] = softStarterSelector.products[selectedGroup][selectedModel].resultModels[resultModel].shopifyVariant;
        console.log(theResult[4]);

        // Temp Output
        //stepResults.find('#js-result-part').html('You selected ' + theResult[0] + ' for an application with a voltage of ' + theResult[1] + ' and a BTU range of ' + theResult[2] + '.<br><br>The recommended model is ' + theResult[3] + '.');

        // Set result slide text elements
        stepResults.find('#js-result-model').html(softStarterSelector.products[selectedGroup][selectedModel].resultModels[resultModel].model);
        stepResults.find('#js-result-part').html('Part Number: ' + theResult[3]);

        // Set result image
        var resultImage = 'images/';
        resultImage += softStarterSelector.products[selectedGroup][selectedModel].resultModels[resultModel].image;
        stepResults.find('#js-result-image').attr('src', resultImage);

        // Set variant price and check if it's available
        // $.getJSON(window.Shopify.routes.root + 'products/micro-air-easytouch-rv-thermostat.js', function(product) {
        //     console.log(product);
        //     var variantIndex = product.variants.map(object => object.id).indexOf(theResult[4]);
        //     var variantPrice = product.variants[variantIndex].price;
        //     var variantAvailability = product.variants[variantIndex].available;
        //     var variantPriceString = variantPrice.toString();
        //     theResult[5] = "$" + variantPriceString.substr(0,variantPriceString.length-2) + "." + variantPriceString.substr(variantPriceString.length-2, variantPrice.length);
        //     stepResults.find('#js-result-price').html('Price: ' + theResult[5]);

        //     // Toggle add to cart buttons if this variant is available.
        //     if (variantAvailability === true) {
        //         cartBtn.removeClass('d-none');
        //     } else if (variantAvailability === false) {
        //         outOfStock.removeClass('d-none');
        //     };

        // } );        

        // Close step 2 and open results
        stepTwo.addClass('hidden');
        stepResults.removeClass('hidden');       
    }

    function addToCart() {
        $.ajax({
            type: "POST",
            url: '/cart/add.js',
            data: {
                quantity: 1,
                id: theResult[4]
            },
            dataType: 'json',
            success: function() {
                $.getJSON('/cart.js', function(cart) {
                    var result = cart.item_count;
                    $('#CartCount > span:first-child').html(result);
                });
                closeModal();
                window.location.href = "/cart";
            },
        });
    }

    function reset() {
        // Hide all slides and display the first slide
        stepOne.removeClass('hidden');
        stepTwo.addClass('hidden');
        stepResults.addClass('hidden');

        // Empty result var
        theResult = ["","","","","","",""];

        // Empty the connections and colors
        stepTwo.find('#js-voltage').html('').addClass('hidden');
        stepTwo.find('#js-btu-options').addClass('hidden');
        stepTwo.find('#js-btus').html('');
        $('.options').removeClass('hidden');
        $('.product-details').removeClass('full-width');

        // Reset results
        stepResults.find('#js-result-model').html('');
        stepResults.find('#js-result-price').html('');
        stepResults.find('#js-result-image').attr('src','');
        cartBtn.addClass('d-none');
        outOfStock.addClass('d-none');

        // Reset compatibility select
        stepTwo.find('#js-compatibility').addClass('hidden');
        stepTwo.find('#js-compatibility-select').val('');
        stepTwo.find('#js-compatibility-select').html('<option value="" disabled selected>Select your existing model</option>');

        // Reset validation
        validConnection = [false,false];
        validColor = [false,false];
        errorNotice.html('');
    }

    //--- INIT
    triggerBtn.on('click', openModal);
    closeModalBtn.on('click', closeModal);
    items.on('click', selectItem);
    resultsBtn.on('click', checkValidation);
    backBtn.on('click', reset);
    cartBtn.on('click', addToCart);
    
    $(document).on('click', '.js-voltage', setVoltage);
    $(document).on('click', '.js-btu', setBTU);
});