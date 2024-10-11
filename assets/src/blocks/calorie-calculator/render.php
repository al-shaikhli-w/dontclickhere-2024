<section class="calorie-calculator container relative">
    <form class="calorie-calculator-form" method="post" accept-charset="UTF-8">
        <div class="radio-group-section" id="gender">
            <p><?php _e('Gender', 'dch-base-theme') ?></p>
            <div class="flex gap-4">
                <div class="selection box-input active">
                    <input id="gender-Female" class="selection-input" name="calorie_gender" type="radio"
                           value="f"/><label
                            class="selection-label" for="gender-Female" title="">
                        <p class="text-paragraph">
                            <?php _e('Female', 'dch-base-theme'); ?>
                        </p>
                    </label>
                </div>
                <div class="selection box-input">
                    <input id="gender-Masculine" class="selection-input" name="calorie_gender" type="radio"
                           value="m"/><label class="selection-label" for="gender-Masculine">
                        <p class="text-paragraph">
                            <?php _e('Masculine', 'dch-base-theme'); ?>
                        </p>
                    </label>
                </div>
            </div>
        </div>
        <div class="form-groups big-one">
            <!-- age -->
            <div class="form-group">
                <label class="form-group-label form-old" for="age"><?php _e('Age', 'dch-base-theme'); ?></label>
                <input class="form-input uppercase" placeholder="<?php _e('Age', 'dch-base-theme'); ?>"
                       type="number" id="age" name="age" min="13" max="120" required value="">
            </div>
            <!-- weight -->
            <div class="form-group">
                <label class="form-group-label" for="weight"><?php _e('Weight (kg)', 'dch-base-theme'); ?></label>
                <input class="form-input" type="number" id="weight" name="weight" min="40" max="300" required placeholder="<?php _e('Weight', 'dch-base-theme'); ?>">
            </div>
            <!-- height -->
            <div class="form-group">
                <label class="form-group-label" for="height"><?php _e('Size (cm)', 'dch-base-theme'); ?></label>
                <input class="form-input" type="number" id="height" name="height" min="100" max="300" required placeholder="<?php _e('Size', 'dch-base-theme'); ?>">
            </div>
            <!-- bodyFat -->
            <div class="form-group">
                <label class="form-group-label" for="bodyFat"><?php _e('Body fat (%)', 'dch-base-theme'); ?></label>
                <input class="form-input" type="number" id="bodyFat" name="bodyFat" min="0" max="100" required placeholder="<?php _e('Body fat', 'dch-base-theme'); ?>">
            </div>
        </div>
        <!-- goal -->
        <div class="radio-group-section" id="goal">
            <p><?php _e('goal', 'dch-base-theme') ?></p>
            <div class="flex gap-4">
                <div class="selection box-input active">
                    <input id="gender-Female" class="selection-input" name="goal-maintain-weight" type="radio"
                           value="0"/><label
                            class="selection-label" for="goal-maintain-weight" title="">
                        <p class="text-paragraph">
                            <?php _e('Maintain weight', 'dch-base-theme'); ?>
                        </p>
                    </label>
                </div>
                <div class="selection box-input">
                    <input id="gender-Masculine" class="selection-input" name="goal-lost-weight" type="radio"
                           value="1"/><label class="selection-label" for="goal-lost-weight">
                        <p class="text-paragraph">
                            <?php _e('Lose weight', 'dch-base-theme'); ?>
                        </p>
                    </label>
                </div>
                <div class="selection box-input">
                    <input id="gender-Masculine" class="selection-input" name="goal-gain-weight" type="radio"
                           value="2"/><label class="selection-label" for="goal-gain-weight">
                        <p class="text-paragraph">
                            <?php _e('Gain weight', 'dch-base-theme'); ?>
                        </p>
                    </label>
                </div>
            </div>
        </div>
        <!-- activity -->
        <div class="form-group">
            <label class="form-group-label" for="activity"><?php _e('Activity', 'dch-base-theme'); ?></label>
            <div class="select-group">
                <span class="trigger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
                <select class="form-select" id="activity" name="activity">
                    <option value="1.2"><?php _e('Little or no sport', 'dch-base-theme'); ?></option>
                    <option value="1.375"><?php _e('Easy (1-3 days per week)', 'dch-base-theme'); ?></option>
                    <option value="1.55"><?php _e('Meddle (1-5 days per week)', 'dch-base-theme'); ?></option>
                    <option value="1.725"><?php _e('High (6-7 days per week)', 'dch-base-theme'); ?></option>
                    <option value="1.9"><?php _e('Very high (2x per day, very physical)', 'dch-base-theme'); ?></option>
                </select>
            </div>
        </div>

        <button class="btn btn-secondary" type="submit">
            <span class="button__label"><?php _e('Calculate now', 'dch-base-theme'); ?></span>
        </button>
    </form>
    <div class="calorie-calculator-result-container">
        <div class="calorie-calculator-result"></div>
    </div>
</section>