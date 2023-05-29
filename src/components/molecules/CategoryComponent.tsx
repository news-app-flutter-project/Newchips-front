import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, FlatList, Pressable, View } from 'react-native';

const CategoryData = [
    {
        id: 'entire',
        title: '전체',
    },
    {
        id: 'politics',
        title: '정치',
    },
    {
        id: 'economy',
        title: '경제',
    },
    {
        id: 'society',
        title: '사회',
    },
    {
        id: 'life',
        title: '생활',
    },
    {
        id: 'informationTechnology',
        title: 'IT/과학',
    },
    {
        id: 'ranking',
        title: '랭킹',
    },
] as const;

type CategoryId = (typeof CategoryData)[number]['id'];

const CategoryComponent = () => {
    const [selectedCategoryData, setSelectedCategoryData] = useState<CategoryId>(CategoryData[0].id);

    const Item = useCallback(({ id, title, selected }: { id: CategoryId; title: string; selected: boolean }) => {
        return (
            <Pressable
                style={selected ? styles.selectedItem : styles.unselectedItem}
                onPress={() => setSelectedCategoryData(id)}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        );
    }, []);

    return (
        <FlatList
            data={CategoryData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <Item id={item.id} title={item.title} selected={item.id === selectedCategoryData} />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    selectedItem: {
        backgroundColor: '#FFED00',
        borderWidth: 1,
        borderColor: '#FFED00',
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
    },
    unselectedItem: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
    },
    separator: {
        width: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default CategoryComponent;
