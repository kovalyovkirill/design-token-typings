
import StyleDictionary from 'style-dictionary';

// Регистрируем кастомный фильтр для фильтрации токенов
StyleDictionary.registerFilter({
    name: 'validCssTokens',
    filter: function(token) {
        // Пропускаем токены с числовыми ключами (это части составных токенов)
        if (!isNaN(token.name)) {
            return false;
        }

        // Пропускаем сложные объекты, которые не поддерживаются в CSS
        const skipTypes = [
            'custom-spacing',
            'custom-stroke',
            'custom-radius',
            'custom-gradient',
            'custom-grid',
            'custom-transition',
            'custom-fontStyle',
            'custom-shadow'
        ];

        return !skipTypes.includes(token.type);
    }
});

// Регистрируем кастомную трансформацию для spacing
StyleDictionary.registerTransform({
    name: 'spacing/css',
    type: 'value',
    transitive: true,
    matcher: function(token) {
        return token.type === 'custom-spacing';
    },
    transform: function(token) {
        const v = token.value;
        return `${v.top}px ${v.right}px ${v.bottom}px ${v.left}px`;
    }
});

// Регистрируем кастомную трансформацию для border
StyleDictionary.registerTransform({
    name: 'border/css',
    type: 'value',
    transitive: true,
    matcher: function(token) {
        return token.type === 'custom-stroke';
    },
    transform: function(token) {
        const v = token.value;
        const style = v.dashPattern && v.dashPattern[0] > 0 ? 'dashed' : 'solid';
        return `${v.weight}px ${style} ${v.color}`;
    }
});

// Регистрируем кастомную трансформацию для radius
StyleDictionary.registerTransform({
    name: 'radius/css',
    type: 'value',
    transitive: true,
    matcher: function(token) {
        return token.type === 'custom-radius';
    },
    transform: function(token) {
        const v = token.value;
        if (v.topLeft === v.topRight && v.topRight === v.bottomRight && v.bottomRight === v.bottomLeft) {
            return `${v.topLeft}px`;
        }
        return `${v.topLeft}px ${v.topRight}px ${v.bottomRight}px ${v.bottomLeft}px`;
    }
});

// Регистрируем кастомную трансформацию для shadow
StyleDictionary.registerTransform({
    name: 'shadow/css',
    type: 'value',
    transitive: true,
    matcher: function(token) {
        return token.type === 'custom-shadow';
    },
    transform: function(token) {
        const v = token.value;
        const inset = v.shadowType === 'innerShadow' ? 'inset ' : '';
        return `${inset}${v.offsetX}px ${v.offsetY}px ${v.radius}px ${v.spread}px ${v.color}`;
    }
});

// Регистрируем кастомную трансформацию для добавления px к dimension
StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    transitive: true,
    matcher: function(token) {
        return token.type === 'dimension';
    },
    transform: function(token) {
        return `${token.value}px`;
    }
});

export default {
    source: ['tokens/**/*.json'],
    platforms: {
        css: {
            buildPath: 'src/styles/css/',
            transforms: [
                'attribute/cti',
                'name/kebab',
                'color/css',
                'size/px'
            ],
            files: [
                {
                    destination: '_variables.css',
                    format: 'css/variables',
                    filter: 'validCssTokens'
                }
            ]
        }
    }
};
